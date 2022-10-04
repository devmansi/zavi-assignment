import React from "react";

import FilterList from "./FilterList";

export default function Filter({ filter }) {
  let filters = [];

  for (const key in filter) {
    filters.push(<FilterList filterName={key} list={filter[key]} />);
  }

  return <section className="filter-section">{filters}</section>;
}
