import React from "react";

import Search from "./components/Search";
import ProductList from "./components/ProductList";
import { getProducts } from "./data";
import Logo from "./Logo";

export default function App() {
  const [products, setProducts] = React.useState([]);

  function handleProductSearch() {
    setProducts(getProducts());
  }

  return (
    <main className={products.length > 0 ? "" : "background"}>
      <div
        className={`logo-searchbar-container ${
          products.length > 0 ? "product-logo-searchbar-container" : ""
        }`}
      >
        <Logo />
        <Search onProductSearch={handleProductSearch} />
      </div>
      {products.length > 0 && <ProductList products={products} />}
    </main>
  );
}
