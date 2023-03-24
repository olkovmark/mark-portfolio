import React from "react";
import "../css/FooterBar.css";
import linkedIn from "../img/icons/linkedIn.svg";
import gitHub from "../img/icons/gitHub.svg";
import instagram from "../img/icons/instagram.svg";

export const FooterBar = () => {
  return (
    <footer className="footer">
      <div className="social">
        <a href="#/" className="social-icon">
          <img src={linkedIn} alt="" />
        </a>
        <a href="#/" className="social-icon">
          <img src={gitHub} alt="" />
        </a>
        <a href="#/" className="social-icon">
          <img src={instagram} alt="" />
        </a>
      </div>
      <p>© 2023</p>
    </footer>
  );
};
