import React from "react";

export default function FilterItem({ type, value, displayValue, applied }) {
  return (
    <li>
      <input
        type="checkbox"
        id={type}
        className="checkbox"
        name={type}
        value={value}
        checked={applied}
      />
      <label forhtml={type} className="filter-item">
        {displayValue}
      </label>
    </li>
  );
}
