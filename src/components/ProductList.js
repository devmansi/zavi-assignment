import React from "react";

import Filter from "./Filter";
import { ratingsData } from "../data";
import Product from "./Product";

export default function ProductList({ products }) {
  if (products.length < 0) {
    return;
  }

  const priceRange = ["Under 500", "1000 to 3000"];

  let brandsData = products.map((product) => {
    return product.brandName;
  });
  brandsData = [...new Set(brandsData)];

  const filter = {
    brands: brandsData,
    "price range": priceRange,
    ratings: ratingsData,
  };

  return (
    <div className="product-page">
      <div className="product-filters-container">
        <h2 className="sidebar-heading">Search results</h2>
        <article className="product-article">
          <Filter filter={filter} />
          <section className="search-results">
            {products.map((product) => {
              return <Product product={product} />;
            })}
          </section>
        </article>
      </div>
    </div>
  );
}
