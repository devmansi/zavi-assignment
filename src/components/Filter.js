import React from "react";

import FilterList from "./FilterList";

export default function Filter({ displayFilters, appliedFilters }) {
  let filters = [];

  //two filtertypes price and rating
  for (const filterType in displayFilters) {
    filters.push(
      <FilterList
        key={filterType}
        filterType={filterType}
        list={displayFilters[filterType]}
        appliedFilters={appliedFilters}
      />
    );
  }

  return <section className="filter-section">{filters}</section>;
}
