import React from "react";
import "./PointCard.scss";

function PointCard(props) {
  const { maximumHits, hits, shots } = props;
  return (
    <>
      <div className="point-Panel text-center">
        <div className="player-one">
          <h2 className="score">
            {maximumHits} {hits}
          </h2>
          <hr />
          <p className="title">Player 1</p>
        </div>
        <div className="player-two">
          <h2 className="score">{shots}</h2>
          <hr />
          <p className="title">Player 2</p>
        </div>
      </div>
    </>
  );
}

export default PointCard;
