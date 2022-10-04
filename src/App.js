import React from "react";

import Search from "./components/Search";
import ProductList from "./components/ProductList";
import { productsData } from "./data";
import Logo from "./Logo";

export default function App() {
  const [products, setProducts] = React.useState([]);

  function onProductSearch() {
    setProducts(productsData);
  }

  return (
    <main className={products.length > 0 ? "" : "background"}>
      <div
        className={`logo-searchbar-container ${
          products.length > 0 ? "product-logo-searchbar-container" : ""
        }`}
      >
        <Logo />
        <Search onProductSearch={onProductSearch} />
      </div>
      {products.length > 0 && <ProductList product={products} />}
    </main>
  );
}
