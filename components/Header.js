import React from "react";
import PropTypes from "prop-types";
import Link from "./Link";
import Navigation from "./Navigation";
import logo from "assets/img/logo.svg";
import navigationPages from "./navigation-pages";
//import Countdown from "./Countdown";
//import Interactive from "antwar-interactive";

const Header = ({ pathname, title }) => {
  const isHomePage = pathname === "/";
  return isHomePage ? (
    <header className={"header header_index"}>
      <div className="header--container container grid grid_6col">
        <Navigation pathname={pathname} pages={navigationPages} />
        <Link to="/" className="rubric site-name header--logo">
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
              <span className="logo--text logo--text-bottom">Finland 2022</span>
            </span>
          </h1>
        </Link>

        {/*<h2 className="header--tagline">React Finland 2021</h2>*/}

        <section className="header--dates">
          <time dateTime="2022-09-12" className="header--date">
            12th
          </time>
          <span> to </span>
          <time dateTime="2022-09-16" className="header--date">
            16th of September
          </time>
          <address className="header--location">Hybrid</address>
        </section>
        {/*<Interactive
          id="components/Countdown.js"
          component={Countdown}
          toDate="2019-04-24"
          containerProps={{ className: "countdown--container" }}
        <section className="header--buy">
          <Link
            to="https://fienta.com/react-finland-2021?281fadadf5cff4be80232837e3ae916f"
            className="buy-button"
          >
            Register
          </Link>
        </section>
        />*/}
      </div>
    </header>
  ) : (
    <header className="header">
      <div className="header--container container grid grid_6col">
        <Link to="/" className="rubric site-name header--logo">
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
        </Link>
        <Navigation pathname={pathname} pages={navigationPages} />
        <h2 className="header--pageTitle">{title}</h2>
      </div>
    </header>
  );
};
Header.propTypes = {
  pathname: PropTypes.string,
  title: PropTypes.string,
};

export default Header;
