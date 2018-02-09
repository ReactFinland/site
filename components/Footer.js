import React from "react";
import Navigation from "./Navigation";
import navigationPages from "./navigation-pages";

const Footer = ({ pathname }) => {
  return (
    <footer className="footer">
      <div className="footer--wrapper">
        <Navigation pathname={pathname} pages={navigationPages} />
        <p className="footer--toolbox">
          <a href="https://toolbox.finland.fi/">Finland Toolbox</a>
        </p>
        <p className="footer--imprint">
          <a href="/imprint/">Imprint</a>
        </p>
        <p className="footer--privacy-policy">
          <a href="/privacy-policy/">Privacy Policy</a>
        </p>
        <p className="footer--coc">
          <a href="http://berlincodeofconduct.org/">Code of Conduct</a>
        </p>
        <p className="footer--copyright">
          © React Finland, {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
