import React from "react";
import "../style/tutorial.css";
import iconCheck from "../assets/images/icon-check.svg";
import { Link } from "react-router-dom";

function Tutorial() {
  return (
    <div className="total-container">
      <div className="tutorial-container">
        <div className="rulesContainer">
          <h1>QUICK TUTORIAL</h1>
          <div className="secondParagraph">
            <h2>HOW TO LEARN</h2>
          </div>
          <div
            className="secondParagraph"
            style={{ marginTop: 0, marginLeft: "6%", marginBottom: "-5%" }}
          >
            <p>
              Open the LEARN section and imitate the gestures that will appear.
              If you do them correctly, a check will appear and you will be able
              to proceed.
            </p>
          </div>
          <div className="secondParagraph">
            <h2>HOW TO PLAY</h2>
            <ol>
              <li>
                &nbsp;&nbsp;&nbsp;Read the phrase that appears on the screen
              </li>
              <li>
                &nbsp;&nbsp;&nbsp;Imitate the gestures previously learned to
                complete the steps.
              </li>
              <li>&nbsp;&nbsp;&nbsp;Proceed to the next phrase.</li>
            </ol>
            <div className="button-container">
              <Link to={"/"}>
                <img
                  src={iconCheck}
                  alt=""
                  style={{ height: 50, width: "auto", marginTop: -20 }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorial;
