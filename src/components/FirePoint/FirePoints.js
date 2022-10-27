import React from "react";
import hitSmall from "../../asset/images/Hit small.png";
import missSmall from "../../asset/images/Miss small.png";
import "./FirePoints.scss";

function FirePoints(props) {
  const { hitPoints, hits } = props;
  let hitPointsCounter = [];
  let hitCounter = [];
  for (let i = 0; i < hitPoints; i++) {
    hitPointsCounter.push(
      <span key={i}>
        <img src={missSmall} alt="hitPointMark" className="hitPointMark" />
      </span>
    );
  }
  for (let j = 0; j < hits; j++) {
    hitCounter.push(
      <span key={j}>
        <img src={hitSmall} alt="hitPointMark" className="hitPointMark" />
      </span>
    );
  }

  return (
    <span className="hit-marker ">
      {hitPointsCounter}
      {hitCounter}
    </span>
  );
}

export default FirePoints;
