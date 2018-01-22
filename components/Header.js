import React from "react";
import Navigation from "./Navigation";
import logo from "assets/img/logo.svg";
import navigationPages from "./navigation-pages";

const Header = ({ pathname, title }) => {
  const isHomePage = pathname === "/";
  return isHomePage ? (
    <header className={isHomePage ? "header header_index" : "header"}>
      <div className="header--container container grid grid--6col">
        <Navigation pathname={pathname} pages={navigationPages} />
        <a href="/" className="rubric site-name header--logo">
          <h1 className="logo">
            <img
              src={logo}
              width={140}
              height={126}
              alt="React Finland Logo"
              className="logo--image"
            />
            <span className="logo--title">
              <span className="logo--text logo--text-top">React </span>
              <span className="logo--text logo--text-bottom">Finland</span>
            </span>
          </h1>
        </a>

        <h2 className="header--tagline">
          Learn More about React, Explore Finland.
        </h2>

        <section className="header--dates">
          <time dateTime="2018-04-24/2018-04-26" className="header--date">
            24-26 April 2018
          </time>
          <address className="header--location">Helsinki, Finland</address>
        </section>

        <section className="header--buy">
          <a href="/#tickets" className="buy-button">
            Buy tickets
          </a>
        </section>
      </div>
    </header>
  ) : (
    <header className="header">
      <div className="header--container container grid grid--6col">
        <Navigation pathname={pathname} pages={navigationPages} />
        <a href="/" className="rubric site-name header--logo">
          <h1 className="logo">
            <img
              src={logo}
              width={140}
              height={126}
              alt="React Finland Logo"
              className="logo--image"
            />
            <span className="logo--title">
              <span className="logo--text logo--text-top">React </span>
              <span className="logo--text logo--text-bottom">Finland</span>
            </span>
          </h1>
        </a>
      </div>
    </header>
  );
};

export default Header;
