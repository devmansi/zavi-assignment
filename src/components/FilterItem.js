import React from "react";

export default function FilterItem({ name, value }) {
  const [isChecked, setIsChecked] = React.useState(false);

  function handleChange() {
    setIsChecked(!isChecked);
  }

  return (
    <li>
      <input
        type="checkbox"
        id={name}
        className="checkbox"
        name={name}
        value={value}
        checked={isChecked}
        onChange={handleChange}
      />
      <label forhtml={name} className="filter-item">
        {value}
      </label>
    </li>
  );
}
