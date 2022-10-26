import React from "react";
import FirePoints from "../FirePoint/FirePoints";
import "./ShipCard.scss";

function ShipCard(props) {
  let { warShips } = props;
  return (
    <>
      <ul className="ship-container">
        {warShips.map((ship, index) => {
          return (
            <li key={index} className="ship-item">
              <img src={ship.icon} className="ship-icon" alt="ship-icon" />
              <FirePoints
                hitPoints={ship.hitPoints - ship.hits}
                hits={ship.hits}
              ></FirePoints>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ShipCard;
