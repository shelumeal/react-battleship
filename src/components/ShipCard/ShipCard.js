import React from "react";
import FirePoints from "../FirePoint/FirePoints";
import "./ShipCard.scss";

function ShipCard(props) {
  let { warShips } = props;
  return (
    <div className="row">
      {warShips.map((ship, index) => {
        return (
          <div key={index} className="col-lg-12 col-6">
            <div className="d-flex">
              <img src={ship.icon} className="ship-icon" alt="ship-icon" />
              <FirePoints
                hitPoints={ship.hitPoints - ship.hits}
                hits={ship.hits}
              ></FirePoints>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShipCard;
