import React, { useState, useEffect } from "react";
import "../style/learn.css";
import iconCheck from "../assets/images/icon-check.svg";
import { Link, useNavigate } from "react-router-dom";
import GestureRecognition from "../components/hookComponents/gestureRecognition";
import Cursed from "../assets/images/gesture-cursed.jpg";
import Wtf from "../assets/images/gesture-wtf.jpg";
import Perfect from "../assets/images/gesture-perfect.jpg";
import Go from "../assets/images/gesture-go.jpg";
import AummAumm from "../assets/images/gesture-aummaumm.jpg";
import Nothing from "../assets/images/gesture-nothing.jpg";
import Spaghetti from "../assets/images/gesture-spaghetti.jpg";
import Smart from "../assets/images/gesture-smart.jpg";

import customEventBus from "../customEventBus/customEventBus";

var counter = 0;

function Learn() {
  const navigate = useNavigate();
  let descriptions = [
    {
      id: "wtf",
      title: "What",
      description:
        "Close all your fingers converging them in one point. Then, move it up and down.",
      image: Wtf,
    },
    {
      id: "exactly",
      title: "Exactly",
      description:
        "Extend pinky, ring and middle fingers. Close thumb and forefinger to form a circle. Move your hand from inside to outside.",
      image: Perfect,
    },
    // {
    //   id: "curse",
    //   title: "Cursed",
    //   description:
    //     "Extend pinky and forefinger, close all the others. Orientate the hand upwards.",
    //   image: Cursed,
    // },
    {
      id: "smart",
      title: "Smart",
      description:
        "Extend the thumb and close all the others fingers. Draw a line down on your cheek with your thumb",
      image: Smart,
    },
    {
      id: "go",
      title: "Go away",
      description:
        "Open completly your finger and curl your thumb. Then, move the hand left and right",
      image: Go,
    },
    // {
    //   id: "aummaumm",
    //   title: "Aumm aumm",
    //   description:
    //     "All the fingers straight down, palm slightly open. Rotate slowly the wrist.",
    //   image: AummAumm,
    // },
    // {
    //   id: "nothing",
    //   title: "There is nothing",
    //   description:
    //     "Do like like a pistol sign, and  then rotate your writst back and forth",
    //   image: Nothing,
    // },
    {
      id: "spaghetti",
      title: "Spaghettata",
      description:
        "Do like scissor sign, rotate your hand to point down. Rotate your wrist multiple times.",
      image: Spaghetti,
    },
    // {
    //   id: "crazy",
    //   title: "You are crazy",
    //   description:
    //     "All the fingers are straight in vertical direction. wave your hand in front of your eyes.",
    //   image: Crazy,
    // },

    // {
    //   id: "nothing",
    //   title: "There is nothing",
    //   description:
    //     "Do like like a pistol sign, and  then rotate your writst back and forth",
    //   image: Nothing,
    // },
    // {
    //   id: "exactly",
    //   title: "Exactly",
    //   description:
    //     "Extend pinky, ring and middle fingers. Close thumb and forefinger to form a circle. Move your hand from inside to outside.",
    //   image: Perfect,
    // },
  ];

  const [state, setState] = useState({
    currentGesture: descriptions[0],
    currentGestureId: descriptions[0].id,
    showBanner: false, // State variable to control the visibility of the banner
    completedGestureId: "",
  });

  function recognitionSuccess(data) {
    console.log("gesto riconosciuto con successo: ", data);
    console.log("COUNTER DOPO EVENTO:", counter);
    setState({
      ...state,
      showBanner: true, // Show the banner when the gesture recognition is successful
      completedGestureId: data,
    });
  }

  function handleBannerClose() {
    console.log("Well done");
    counter++;
    console.log("aumentato il contatore a ", counter);
    customEventBus.dispatchEvent("newGesture", descriptions[counter].id);

    setState({
      ...state,
      showBanner: false, // Hide the banner when the close button is clicked
      currentGesture: descriptions[counter],
      currentGestureId: descriptions[counter].id,
    });
  }

  function navigateHome() {
    navigate("/");
  }

  useEffect(() => {
    customEventBus.on("gestureRecognitionSuccess", recognitionSuccess);
    return () => {
      customEventBus.remove(
        "gestureRecognitionSuccess",
        console.log("evento rimosso")
      );
    };
  }, []);

  return (
    <div className="total-container">
      <div className="tutorial-container">
        <div className="rulesContainer">
          <h1>Learn "{state.currentGesture.title}" gesture</h1>
          <div className="firstParagraph">
            <p>
              Imitate the gestures, do it correctly to proceed. You can see a
              preview of the webcam on the right, and a picture of the gesture
              on the left.
            </p>
          </div>
          {/* <div className="button-container">
          <Link to={"/"}>
            <img src={iconCheck} alt="" />
          </Link>
        </div> */}

          <div className="learning-container">
            <div className="description-container">
              <div className="gesture-info">
                <h3>{state.currentGesture.title}</h3>
                <p>{state.currentGesture.description}</p>
              </div>
              <img
                src={state.currentGesture.image}
                style={{
                  maxWidth: "100%",
                  height: 200,
                  marginBottom: 10,
                  marginTop: 20,
                }}
                alt={state.currentGesture.title}
              />
            </div>
            <div className="webcam-container">
              <GestureRecognition
                scenario={"learn"}
                gesture={state.currentGestureId}
              />
            </div>
          </div>
        </div>

        {state.showBanner && (
          <div className="overlay">
            <div className="banner">
              {counter !== descriptions.length - 1 ? (
                <p>Well done! Let's proceed to the next gesture to learn!</p>
              ) : (
                <p>You concluded the learning! Now let's play!</p>
              )}
              <p>
                <img
                  src={
                    descriptions.find(
                      (item) => item.id === state.completedGestureId
                    )?.image
                  }
                  style={{ width: 300, height: 300, marginBottom: 10 }}
                  alt={state.completedGestureId}
                />
              </p>
              {/* <button onClick={handleBannerClose}>Continue</button> */}
              {counter !== descriptions.length - 1 ? (
                <button onClick={handleBannerClose}>Continue</button>
              ) : (
                <button onClick={navigateHome}>Go back to the menu</button>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="button-container">
        <Link to={"/"}>
          <img src={iconCheck} alt="" style={{ height: 50, marginBottom: 5 }} />
        </Link>
      </div>
    </div>
  );
}

export default Learn;
