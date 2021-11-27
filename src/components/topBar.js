import React from "react";
import FilterOptions from "./filterOptions";
import InputAndOthers from "./inputandothers";

function TopBar() {
  return (
    <>
      <div className="d-flex flex-column">
        <InputAndOthers />
        <div className="">
          <FilterOptions />
        </div>
      </div>
    </>
  );
}

export default TopBar;
