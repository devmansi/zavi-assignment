import React from "react";

import { brandsData, ratingsData } from "../data";
import FilterList from "./FilterList";
import Product from "./Product";

export default function ProductList({ product }) {
  const priceRange = ["Under 500", "1000 to 3000"];

  return (
    <div className="product-page">
      <div className="product-filters-container">
        <h2 className="sidebar-heading">Search results</h2>
        <article className="product-article">
          <section className="filter-section">
            <FilterList filterName="brand" list={brandsData} />
            <FilterList filterName="price range" list={priceRange} />
            <FilterList filterName="ratings" list={ratingsData} />
          </section>
          <section className="search-results">
            {product.map((product) => {
              return <Product product={product} ratingList={ratingsData} />;
            })}
          </section>
        </article>
      </div>
    </div>
  );
}
