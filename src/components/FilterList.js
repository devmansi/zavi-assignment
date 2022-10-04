import React from "react";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import FilterItem from "./FilterItem";

export default function FilterList({ filterName, list }) {
  const [dropDownArrow, setDropDownArrow] = React.useState("open");

  return (
    <>
      <div className={filterName}>
        <div className="filter-name">
          <h3 className="filter-heading">{filterName}</h3>
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
        {dropDownArrow === "open" && (
          <ul className="filterItems">
            {list.map((item, key) => {
              return <FilterItem />;
            })}
          </ul>
        )}
      </div>
      {filterName !== "ratings" && <hr className="hr" />}
    </>
  );
}
