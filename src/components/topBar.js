import React from "react";
import FilterOptions from "./filterOptions";
import InputAndOthers from "./inputandothers";
import Unsplash from "./unsplash";

function TopBar() {
  return (
    <>
      <div className="d-flex flex-column">
        <InputAndOthers />

        <FilterOptions />

        <Unsplash />
      </div>
    </>
  );
}

export default TopBar;
