import React, { useState } from "react";
import { HiSwitchHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";
import Pvp from "../assets/images/player-vs-player.svg";
import PvpCpu from "../assets/images/player-vs-cpu.svg";
import Logo from "../assets/images/logo.svg";
import Flag from "../assets/images/flag.png";
import "../style/home.css";

function Home() {
  //   const [player, setPlayer] = useState(true);

  return (
    <div className="mainMenu">
      <img src={Flag} alt="logo" className="logo" />

      <Link to="/game" className="gameRules">
        <p> PLAY </p>
      </Link>

      <Link to="/learn" className="gameRules">
        <p> LEARN</p>
      </Link>

      <Link to="/tutorial" className="gameRules">
        <p> TUTORIAL </p>
      </Link>
    </div>
  );
}

export default Home;
