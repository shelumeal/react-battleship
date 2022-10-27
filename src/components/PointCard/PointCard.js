import React from "react";
import "./PointCard.scss";

function PointCard(props) {
  const { hits, shots } = props;
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="player-one">
          <h2 className="score">{shots}</h2>
          <hr />
          <p className="title">Player 1</p>
        </div>
        <div className="player-two">
          <h2 className="score">0</h2>
          <hr />
          <p className="title">Player 2</p>
        </div>
      </div>
      <div className="d-flex justify-content-between mt-1 p-3">
        <span className="shots">Shots : {shots}</span>
        <span className="hits">Hits : {hits}</span>
      </div>
    </>
  );
}

export default PointCard;
