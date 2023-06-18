import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as handpose from "@tensorflow-models/handpose";
import Webcam from "react-webcam";
import "./gestureRecognition.css";
import { drawHand } from "../../utilities/utilities";
import * as fp from "fingerpose";
import victory from "../../victory.png";
import thumbs_up from "../../thumbs_up.png";
import { gestures } from "../../utilities/gestures";
import customEventBus from "../../customEventBus/customEventBus";
// Import @tensorflow/tfjs-core
// Adds the CPU backend to the global backend registry.
import "@tensorflow/tfjs-backend-cpu";

// import logo from './logo.svg';
// var completedGesture = "";
var counter = 0;

function GestureRecognition(props) {
  const tresholdRecognition = 2;
  let scenario = props.scenario;
  let gestureToRecognize = props.gesture;

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const { curse, exactly, rock, wtf, aummaumm, nothing, go, spaghetti, smart } =
    gestures();

  const [emoji, setEmoji] = useState(null);
  const [state, setState] = useState({
    loaded: false,
  });

  // const [state, setState] = useState({
  //   currentGesture: gestureToRecognize,
  // });

  // const images = { thumbs_up: thumbs_up, victory: victory };

  const runHandpose = async () => {
    const net = await handpose.load();
    console.log("Handpose model loaded.");
    requestAnimationFrame(() => detect(net));
    setState({
      ...state,
      loaded: true,
    });
  };

  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const hand = await net.estimateHands(video);

      const ctx = canvasRef.current.getContext("2d");
      drawHand(hand, ctx);

      if (hand.length > 0 && counter < tresholdRecognition) {
        const landmarks = hand[0].landmarks;

        const GE = new fp.GestureEstimator([
          fp.Gestures.VictoryGesture,
          fp.Gestures.ThumbsUpGesture,
          curse,
          exactly,
          rock,
          wtf,
          aummaumm,
          nothing,
          go,
          spaghetti,
          smart,
        ]);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const confidence = gesture.gestures.map(
            (prediction) => prediction.confidence
          );
          const maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );

          const detectedGesture = gesture.gestures[maxConfidence].name;
          // console.log(".")
          // console.log(
          //   "dalle props: ",
          //   props.gesture,
          //   "precedente : ",
          //   completedGesture
          // );

          if (
            detectedGesture === gestureToRecognize &&
            confidence[maxConfidence] > 7.5
          ) {
            console.log("Mossa corretta! ", gestureToRecognize);
            if (counter < tresholdRecognition) {
              counter++;
            }
            if (counter >= tresholdRecognition) {
              //props.completedGesture = props.gesture;
              //counter = 0;
              //console.log("completed gesture: ", props.completedGesture);
              console.log("props gesture: ", gestureToRecognize);
              // console.log("counter ", counter);
              customEventBus.dispatchEvent(
                "gestureRecognitionSuccess",
                gestureToRecognize
              );
            }
          }
        }
      }
    }

    requestAnimationFrame(() => detect(net));
  };

  function resetCounter(data) {
    gestureToRecognize = data;
    counter = 0;
    // console.log("counter ora :", counter);
    console.log("new  gestureToRecognize:", data);
  }

  useEffect(() => {
    runHandpose();
    if (scenario === "learn") {
      console.log("learning!", gestureToRecognize);
    } else if (scenario.name === "play") {
      console.log("playing!");
    }

    customEventBus.on("newGesture", resetCounter);
    return () => {
      customEventBus.remove(
        "newGesture",
        console.log("evento  newGesture rimosso")
      );
    };
  }, []);

  return (
    <div>
      <Webcam
        ref={webcamRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "15vw",
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 9,
          width: 320,
          height: 240,
        }}
        onLoadedData={() => console.log("Camera is fully loaded")}
      />

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "15vw",
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 9,
          width: 320,
          height: 240,
        }}
      />
      {!state.loaded && (
        <div
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "15vw",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 10,
            width: 320,
            height: 240,
            opacity: 0.5, // Adjust opacity as needed
            backgroundColor: "black", // Set the desired color
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "18px",
          }}
        >
          <h3>Wait some seconds before showing your hands</h3>
        </div>
      )}
    </div>
  );
}

export default GestureRecognition;
