import React from "react";
import "./filter.css";


const FilterBtn = ({ label, selected, ...rest }) => {
  return (
    <div
      className={`filter-btn ${selected ? " filter-btn-selected" : ""}`}
      {...rest}
    >
      {label}
    </div>
  );
};

export default FilterBtn;
