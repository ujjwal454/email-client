import React from "react";
import "./app.css";
import Card from "./components/card";
import FilterBtn from "./components/buttons/filter";
import { filterOptions } from "./constants";
import { useState } from "react";

function App() {
  const [selectedFilters, setSelectedFilters] = useState("");

  const handleFilterClick = (key) => {
    setSelectedFilters(key);
  };

  return (
    <div className="container">
      {/* filter section */}
      <div className="filter-container">
        <p className="filter-heading"> Filter By:</p>
        {filterOptions.map((item) => (
          <FilterBtn
            label={item.value}
            key={item.key}
            selected={selectedFilters === item.key}
            onClick={() => handleFilterClick(item.key)}
          />
        ))}
      </div>
      <Card />
    </div>
  );
}

export default App;
