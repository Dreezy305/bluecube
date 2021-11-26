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
  const menu = [
    { id: 1, image: Cube, title: "bluecube" },
    { id: 2, image: Home, title: "Home" },
    { id: 3, image: Message, title: "Message" },
    { id: 4, image: Ranking, title: "Ranking" },
    { id: 5, image: Challenge, title: "Challenge" },
  ];
  return (
    <div>
      <h1>Left side bar</h1>
    </div>
  );
}

export default LeftSideBar;
