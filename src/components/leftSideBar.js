import React from "react";
import PropTypes from "prop-types";
import Cube from "../assets/cube.svg";
import Home from "../assets/home.svg";
import Message from "../assets/message.svg";
import Ranking from "../assets/ranking.svg";
import Challenge from "../assets/challenge.svg";
import Party from "../assets/party.svg";
import Connect from "../assets/connect.svg";
import Parade from "../assets/parade.svg";
import Group from "../assets/group.svg";

function LeftSideBar() {
  const menus = [
    { id: 1, image: Ranking, title: "Ranking" },
    { id: 2, image: Challenge, title: "Challenge" },
    { id: 3, image: Party, title: "Party" },
    { id: 4, image: Connect, title: "Connect" },
    { id: 5, image: Parade, title: "Parade" },
    { id: 6, image: Group, title: "Group" },
  ];

  const SideBarSection = ({ image, title }) => {
    return (
      <ul className="mt-2 sidelist">
        <li className="d-inline-block home">
          <img src={image} className="float-left me-2" alt="logo_icon" />
          <p className="d-inline text-end ms-1">{title}</p>
        </li>
      </ul>
    );
  };

  SideBarSection.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  return (
    <div className="left pt-3 ps-5">
      <ul className="list-unstyled mt-4 ms-4">
        <li className="" style={{ marginTop: "35px !important" }}>
          <img src={Cube} className="float-left ms-2 me-2" alt="bluecube" />
          <p
            className="d-inline text-end ms-1 fw-bold align-middle"
            style={{ fontSize: "20px", color: "#4841a0" }}
          >
            bluecube
          </p>
        </li>
        <li className="mt-5 mb-4 home">
          <img src={Home} className="float-left ms-2 me-2" alt="logo_icon" />
          <p className="d-inline text-end ms-1 align-middle">Home</p>
        </li>
        <li className="mt-2 mb-4 home">
          <img src={Message} className="float-left ms-2 me-2" alt="logo_icon" />
          <p className="d-inline text-end ms-1">Message</p>
        </li>
        <li className="ms-2 mt-2 mb-4 ">
          <p className="mt-3 fw-bold">SHARED</p>
        </li>
      </ul>

      {menus.map((menu) => (
        <SideBarSection key={menu.id} image={menu.image} title={menu.title} />
      ))}
    </div>
  );
}

export default LeftSideBar;
