import React from "react";
import PointCard from "../PointCard/PointCard";
import ShipCard from "../ShipCard/ShipCard";
import "./ResultPanel.scss";
import useGame from "../../store/GameContext";

function ResultPanel() {
  const { state } = useGame();
  return (
    <div className="col-lg-2 offset-lg-3 col-md-12 col-sm-12 col-xs-12">
      <div className="row">
        <div className="points-panel">
          <div className="col col-md-12 col-sm-12 col-xs-12">
            <PointCard
              hits={state.hits}
              shots={state.shots}
              maximumHits={state.maximumHits}
            ></PointCard>
          </div>
          <hr />
          <div className="col-md-12 col-sm-12 col-xs-12 mt-2">
            <ShipCard warShips={state.warShips}></ShipCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPanel;
