import React from "react";
import "./StartGameButton.scss";

function StartGameButton(props) {
  const { onClick, text } = props;
  return (
    <div className="text-center">
      <div className="start-button" onClick={() => onClick()}>
        {text ? text : <h1>Start New Game</h1>}
      </div>
    </div>
  );
}

export default StartGameButton;
