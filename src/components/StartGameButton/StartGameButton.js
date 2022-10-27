import React from "react";
import "./StartGameButton.scss";

function StartGameButton(props) {
  const { onClick } = props;
  return (
    <div className="text-center">
      <div
        type="button"
        className="btn btn-lg btn-outline-primary start-button"
        onClick={() => onClick()}
      >
        Start New Game
      </div>
    </div>
  );
}

export default StartGameButton;
