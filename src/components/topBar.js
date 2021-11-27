import React from "react";
import FilterOptions from "./filterOptions";
import InputAndOthers from "./inputandothers";

function TopBar() {
  return (
    <>
      <div className="d-flex flex-column">
        <InputAndOthers />

        <FilterOptions />
      </div>
    </>
  );
}

export default TopBar;
