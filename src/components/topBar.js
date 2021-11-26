import React from "react";
import Search from "../assets/search.svg";

function TopBar() {
  return (
    <div className="d-flex flex-row justify-content-between w-100">
      <div className="topbar d-flex flex-row">
        <input
          type="text"
          className="position-relative mt-4 px-5"
          placeholder="Find Something..."
        />
        <img src={Search} className="position-absolute" alt="search_icon" />
        <button
          type="button"
          className="btn btn-primary mt-4 px-4 position-absolute"
        >
          Search
        </button>
      </div>
      <div>buttons</div>
    </div>
  );
}

export default TopBar;
