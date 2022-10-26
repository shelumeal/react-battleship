import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="logo">Battleship Game</div>
      {/* <Link to="/">
        <div className="logo">Movie App</div>
      </Link> */}
    </div>
  );
}

export default Header;
