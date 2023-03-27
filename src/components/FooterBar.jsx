import React from "react";
import "../css/FooterBar.css";
import linkedIn from "../img/icons/linkedIn.svg";
import gitHub from "../img/icons/gitHub.svg";
import instagram from "../img/icons/instagram.svg";

export const FooterBar = () => {
  return (
    <footer className="footer">
      <div className="social">
        <a
          href="https://www.linkedin.com/in/mark-olkov-b88b68246"
          className="social-icon"
        >
          <img src={linkedIn} alt="" />
        </a>
        <a href="https://github.com/olkovmark" className="social-icon">
          <img src={gitHub} alt="" />
        </a>
        <a
          href="https://instagram.com/olkovmark?igshid=ZDdkNTZiNTM= "
          className="social-icon"
          target="_blank"
        >
          <img src={instagram} alt="" />
        </a>
      </div>
      <p>© 2023</p>
    </footer>
  );
};
