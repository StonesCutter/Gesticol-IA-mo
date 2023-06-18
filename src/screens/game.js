import React, { Component } from "react";
import "../style/game.css";
import iconCheck from "../assets/images/icon-check.svg";
import GestureRecognition from "../components/hookComponents/gestureRecognition";
import customEventBus from "../customEventBus/customEventBus";
import CheckIcon from "../assets/images/check-icon.png";
import CompleteIcon from "../assets/images/icon-complete.jpg";

const phrases = [
  {
    text: "Let's go.",
    gestures: ["go"],
    completed: [false],
    number: 1,
  },
  {
    text: "We should go ... what are you doing??",
    gestures: ["go", "wtf"],
    completed: [false, false],
    number: 2,
  },
  {
    text: "That pasta was perfect",
    gestures: ["spaghetti", "exactly"],
    completed: [false, false],
    number: 2,
  },
  {
    text: "You are witty!",
    gestures: ["smart"],
    completed: [false],
    number: 1,
  },
  {
    text: "Smart move, very good. Now let's go.",
    gestures: ["smart", "exactly", "go"],
    completed: [false, false, false],
    number: 3,
  },
];

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGestureId: phrases[0].gestures[0],
      arrayPhrases: phrases,
      currentPhrase: phrases[0].text,
      gesturesCurrentPhrase: phrases[0].gestures,
      showBanner: false,
      counterGestures: 0,
      completedGestureId: "",
    };
  }

  recognitionSuccess = (data) => {
    let currentGesture = "";
    let { arrayPhrases, gesturesCurrentPhrase } = this.state;
    let showBanner = false;

    if (gesturesCurrentPhrase.length === 0) {
      showBanner = true;
      arrayPhrases.shift();
      if (arrayPhrases.length !== 0) {
        gesturesCurrentPhrase = arrayPhrases[0].gestures;
        currentGesture = arrayPhrases[0].gestures[0];
      }
      // } else {
      //   // data = "",
      //   // currentGesture = "",
      //   arrayPhrases[0].text = "";
      // }
    } else {
      currentGesture = gesturesCurrentPhrase.shift();
      customEventBus.dispatchEvent("newGesture", currentGesture);
    }

    this.setState({
      showBanner,
      completedGestureId: data,
      currentGestureId: currentGesture,
      currentPhrase: arrayPhrases.length !== 0 ? arrayPhrases[0].text : "",
      gesturesCurrentPhrase,
      arrayPhrases,
    });
  };

  handleBannerClose = () => {
    customEventBus.dispatchEvent(
      "newGesture",
      this.state.gesturesCurrentPhrase[0]
    );

    this.setState({
      showBanner: false,
    });
  };

  navigateHome = () => {
    window.location.href = "/";
  };

  logState = () => {
    console.log(this.state);
  };

  componentDidMount() {
    customEventBus.on("gestureRecognitionSuccess", this.recognitionSuccess);
    console.log(this.state);
  }

  componentWillUnmount() {
    customEventBus.remove(
      "gestureRecognitionSuccess",
      console.log("evento rimosso")
    );
  }

  render() {
    const { currentPhrase, currentGestureId, showBanner, arrayPhrases } =
      this.state;

    return (
      <div className="total-container">
        <div className="tutorial-container">
          <div className="rulesContainer" style={{ height: "60vh" }}>
            <h1>Speak with gestures</h1>
            <div className="firstParagraph">
              <p>
                Read the phrases and "speak them" with the gestures you have
                learned during the learning session!
              </p>
            </div>
            <div className="secondParagraph">
              <div className="learning-container">
                <div className="description-container">
                  <h2>{currentPhrase}</h2>
                  <h3 style={{ marginTop: 10 }}>
                    Complete it with {arrayPhrases[0]?.number} gestures
                  </h3>
                </div>
                <div className="webcam-container">
                  <div style={{ marginTop: -120 }}>
                    <GestureRecognition
                      scenario={"play"}
                      gesture={currentGestureId}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {showBanner && (
            <div className="overlay">
              <div className="banner" style={{ height: 200 }}>
                {this.state.arrayPhrases.length !== 0 ? (
                  <p>Well done! Try the next phrase</p>
                ) : (
                  <p>You concluded the experience!</p>
                )}
                {this.state.arrayPhrases.length !== 0 ? (
                  <>
                    <p>
                      <img
                        src={CheckIcon}
                        alt="logoCheck"
                        style={{ height: 100, width: 100 }}
                      />
                    </p>
                    <button onClick={this.handleBannerClose}>Continue</button>
                  </>
                ) : (
                  <div className="button-container">
                    {" "}
                    <img
                      src={iconCheck}
                      alt=""
                      style={{ height: 50, marginBottom: 5, marginTop: 30 }}
                      onClick={this.navigateHome}
                    />{" "}
                  </div>
                )}
                {/* <button onClick={this.logState}>Logga stato</button> */}
              </div>
            </div>
          )}
        </div>
        <div className="button-container">
          <img
            src={iconCheck}
            alt=""
            style={{ height: 50, marginBottom: 5 }}
            onClick={this.navigateHome}
          />
          {/* <button onClick={this.logState}>Logga stato</button> */}
        </div>
      </div>
    );
  }
}

export default Game;
