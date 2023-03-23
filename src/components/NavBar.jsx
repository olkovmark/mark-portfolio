import React from "react";
import "../css/NavBar.css";

export const NavBar = () => {
  return (
    <div className="header">
      <h1>Portfolio</h1>

      <nav className="navigation">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/skils"> Skils</a>
          </li>
          <li>
            <a href="/project">Contacs</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
