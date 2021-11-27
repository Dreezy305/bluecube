import React from "react";
import Chevron from "../assets/chevronDown.svg";

function FilterOptions() {
  return (
    <div className="d-flex flex-row options">
      <div className="options_content">
        <p className="align-middle py-2 px-3">
          <span className="align-middle me-2">World</span>
          <span className="align-middle">
            <img src={Chevron} className="" alt="chevron_down" />
          </span>
        </p>
      </div>
      <div className="options_content">
        <p className="align-middle py-2 px-3">
          <span className="align-middle me-2">Following</span>
          <span className="align-middle">
            <img src={Chevron} className="" alt="chevron_down" />
          </span>
        </p>
      </div>
      <div className="options_content">
        <p className="align-middle py-2 px-3">
          <span className="align-middle me-2">Popular</span>
          <span className="align-middle">
            <img src={Chevron} className="" alt="chevron_down" />
          </span>
        </p>
      </div>
      <div className="options_content">
        <p className="align-middle py-2 px-3">
          <span className="align-middle me-2">Post</span>
          <span className="align-middle">
            <img src={Chevron} className="" alt="chevron_down" />
          </span>
        </p>
      </div>
      <div className="options_content">
        <p className="align-middle py-2 px-3">
          <span className="align-middle me-2">Gender</span>
          <span className="align-middle">
            <img src={Chevron} className="" alt="chevron_down" />
          </span>
        </p>
      </div>
      <div className="options_content">
        <p className="align-middle py-2 px-3">
          <span className="align-middle me-2">Location</span>
          <span className="align-middle">
            <img src={Chevron} className="" alt="chevron_down" />
          </span>
        </p>
      </div>
      <div className="options_content">
        <p className="align-middle py-2 px-3">
          <span className="align-middle me-2">Profession</span>
          <span className="align-middle">
            <img src={Chevron} className="" alt="chevron_down" />
          </span>
        </p>
      </div>
    </div>
  );
}

export default FilterOptions;
