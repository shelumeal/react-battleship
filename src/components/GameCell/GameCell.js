import React from "react";
import hit from "../../asset/images/Hit.png";
import miss from "../../asset/images/Miss.png";

function GameCell(props) {
  let { onCellClick, x, y, cellState } = props;

  function onClick(x, y, cellState) {
    if (cellState !== "miss" && cellState !== "hitted") {
      onCellClick(x, y);
    }
  }

  return (
    <div onClick={() => onClick(x, y, cellState)} className="cellStyle">
      {cellState === "miss" && (
        <img
          src={miss}
          className="miss"
          alt="miss"
          width="auto"
          height="auto"
        />
      )}
      {cellState === "hitted" && (
        <img
          src={hit}
          className="hitted"
          alt="hitted"
          width="auto"
          height="auto"
        />
      )}
    </div>
  );
}

export default GameCell;
