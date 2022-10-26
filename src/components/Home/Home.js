import React, { useEffect } from "react";
import "./Home.scss";
import ResultPanel from "../ResultPanel/ResultPanel";
import useGame from "../../store/GameContext";
import { calculateMaxHits } from "../../utils/calculateMaxHits";
import { masterData } from "../../utils/masterData";

function Home() {
  const { state, start } = useGame();

  useEffect(() => {
    let newState = state;
    const maxHits = calculateMaxHits();
    let newFlotilla = masterData;
    newState.maximumHits = maxHits;
    newState.flotilla = newFlotilla;

    start(newState);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <ResultPanel></ResultPanel>
      </div>
    </div>
  );
}

export default Home;
