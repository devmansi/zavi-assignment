import React from "react";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import FilterItem from "./FilterItem";

export default function FilterList({ filterType, list, appliedFilters }) {
  // this state manages the opening and closing of list of filtertype
  const [dropDownArrow, setDropDownArrow] = React.useState("open");

  return (
    <>
      <div>
        <div className="filter-name">
          <h3 className="filter-heading">{filterType}</h3>
          {dropDownArrow === "open" ? (
            <MdKeyboardArrowDown
              className="arrow"
              onClick={() => setDropDownArrow("close")}
            />
          ) : (
            <MdKeyboardArrowUp
              className="arrow"
              onClick={() => setDropDownArrow("open")}
            />
          )}
        </div>
        {/**
         * opens the list of filters for a particular filter-type
         */}
        {dropDownArrow === "open" && (
          <ul className="filterItems">
            {list.map(({ displayValue, value }, key) => {
              return (
                <FilterItem
                  type={filterType}
                  key={key}
                  displayValue={displayValue}
                  value={value}
                  applied={Boolean(appliedFilters[filterType][value])}
                />
              );
            })}
          </ul>
        )}
      </div>
      {filterType !== "ratings" && <hr className="hr" />}
    </>
  );
}
