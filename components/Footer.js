import React from "react";
import Navigation from "./Navigation";
import navigationPages from "./navigation-pages";

const Footer = ({ pathname }) => {
  return (
    <footer className="footer">
      <div className="footer--wrapper">
        <Navigation pathname={pathname} pages={navigationPages} />
        <p className="footer--copyright">© React Finland, 2018</p>
      </div>
    </footer>
  );
};

export default Footer;
