import React from "react";
import Search from "../assets/search.svg";
import Bell from "../assets/bell.svg";
import Avatar from "../assets/avatar_two.svg";

function TopBar() {
  return (
    <>
      <div className="d-flex flex-row justify-content-around align-items-baseline w-100">
        <div className="topbar d-flex flex-row position-relative">
          <input
            type="text"
            className="mt-4 px-5"
            placeholder="Find Something..."
          />
          <img src={Search} className="position-absolute" alt="search_icon" />
          <button type="button" className="btn btn-primary mt-4 px-4">
            Search
          </button>
        </div>

        <div className="d-flex flex-row justify-content-around align-items-center topbar_left">
          <div className="position-relative">
            <img
              src={Bell}
              className="img-fluid me-3"
              alt="notification_bell"
            />
            <span class="badge-overlay circle">3</span>
          </div>
          <div className="position-relative">
            <img src={Avatar} className="img-fluid ms-5" alt="avatar" />
            <span class="avatar-overlay dot"></span>
          </div>
          <p className="mt-3 ms-5">Abigail</p>
        </div>
      </div>
    </>
  );
}

export default TopBar;
