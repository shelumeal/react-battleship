import React, { useEffect, useState } from "react";
import "./Home.scss";
import ResultPanel from "../ResultPanel/ResultPanel";
import useGame from "../../store/GameContext";
import GameBoard from "../GameBoad/GameBoard";
import { calculateMaxHits } from "../../utils/calculateMaxHits";
import { masterData } from "../../utils/masterData";

function Home() {
  const { state, load } = useGame();
  const [windowSize, setwindowSize] = useState(getWindowDimensions());

  useEffect(() => {
    let newState = state;

    function handleResize() {
      setwindowSize(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);

    const maxHits = calculateMaxHits(); // Calculate maximun number of hits
    let newWarShips = JSON.parse(JSON.stringify(masterData)); // Clone masterdata
    newState.maximumHits = maxHits;
    newState.warShips = newWarShips;
    newState.screenType = getScreenType();

    // Dispatch action
    load(newState);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
