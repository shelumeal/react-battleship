import React, { useEffect, useState } from "react";
import "./Home.scss";
import ResultPanel from "../ResultPanel/ResultPanel";
import useGame from "../../store/GameContext";
import { calculateMaxHits } from "../../utils/calculateMaxHits";
import { masterData } from "../../utils/masterData";
import GameBoard from "../GameBoad/GameBoard";

function Home() {
  const { state, start } = useGame();
  const [windowSize, setwindowSize] = useState(getWindowDimensions());

  function getWindowDimensions() {
    return window.innerWidth;
  }

  function getScreenType() {
    if (windowSize > 991) {
      return "desktop";
    } else if (windowSize < 991) {
      return "tablet";
    }
  }

  useEffect(() => {
    let newState = state;

    const maxHits = calculateMaxHits();
    let newWarShips = JSON.parse(JSON.stringify(masterData)); // Clone masterdata
    newState.maximumHits = maxHits;
    newState.warShips = newWarShips;

    function handleResize() {
      setwindowSize(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);

    newState.screenType = getScreenType();

    // Dispatch action
    start(newState);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container">
      {state.screenType === "desktop" ? (
        <div className="row">
          <ResultPanel></ResultPanel>
          <GameBoard></GameBoard>
        </div>
      ) : (
        <div className="row">
          <GameBoard></GameBoard>
          <ResultPanel></ResultPanel>
        </div>
      )}
    </div>
  );
}

export default Home;
