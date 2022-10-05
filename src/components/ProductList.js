import React from "react";

import { displayFilters, applyFilters } from "../filterOptions";
import Filter from "./Filter";
import Product from "./Product";

export default function ProductList({ products }) {
  const [appliedFilters, setAppliedFilters] = React.useState({
    ratings: {},
    price: {},
  });

  React.useEffect(() => {
    setAppliedFilters({
      ratings: {},
      price: {},
    });
  }, [products]);

  //it runs when user wants to filter the products
  function handleFiltering(e) {
    if (!e.target.classList.contains("checkbox")) {
      return;
    }

    let filterType = e.target.name,
      filterValue = e.target.value,
      checked = e.target.checked;

    setAppliedFilters({
      ...appliedFilters,
      [filterType]: { ...appliedFilters[filterType], [filterValue]: checked },
    });
  }

  const filteredProducts = applyFilters(products, appliedFilters);

  return (
    <div className="product-page">
      <div className="product-filters-container" onClick={handleFiltering}>
        <h2 className="sidebar-heading">Search results</h2>
        <article className="product-article">
          <Filter
            displayFilters={displayFilters}
            appliedFilters={appliedFilters}
          />
          <section className="search-results">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </section>
        </article>
      </div>
    </div>
  );
}
