import React, { useEffect } from "react";
import "./Home.scss";
import ResultPanel from "../ResultPanel/ResultPanel";
import useGame from "../../store/GameContext";
import { calculateMaxHits } from "../../utils/calculateMaxHits";
import { masterData } from "../../utils/masterData";
import GameBoard from "../GameBoad/GameBoard";

function Home() {
  const { state, start } = useGame();

  useEffect(() => {
    let newState = state;

    const maxHits = calculateMaxHits();
    let newWarShips = masterData;
    newState.maximumHits = maxHits;
    newState.warShips = newWarShips;

    start(newState);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <ResultPanel></ResultPanel>
        <GameBoard></GameBoard>
      </div>
    </div>
  );
}

export default Home;
