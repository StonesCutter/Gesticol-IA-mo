import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import GestureRecognition from "../components/hookComponents/gestureRecognition";
import Tutorial from "../screens/tutorial";
import Learn from "../screens/learn";
import Home from "../screens/home";
import App from "../App";
import Game from "../screens/game";

function Routing() {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/tutorial" element={<Tutorial />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default Routing;
