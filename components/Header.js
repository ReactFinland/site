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
              <span className="logo--text logo--text-bottom">Finland 2021</span>
            </span>
          </h1>
        </Link>

        {/*<h2 className="header--tagline">React Finland 2021</h2>*/}

        <section className="header--dates">
          <time dateTime="2021-08-30" className="header--date">
            30th of August
          </time>
          <span> to </span>
          <time dateTime="2021-09-03" className="header--date">
            3rd of Sept.
          </time>
          <address className="header--location">Online and Helsinki(?)</address>
        </section>
        {/*<Interactive
          id="components/Countdown.js"
          component={Countdown}
          toDate="2019-04-24"
          containerProps={{ className: "countdown--container" }}
        />
        <section className="header--buy">
          <Link
            to="https://fienta.com/react-finland-2020?e8677b7f3a2f2d38052763b8d1cd9117"
            className="buy-button"
          >
            Buy tickets
          </Link>
        </section>*/}
      </div>
    </header>
  ) : (
    <header className="header">
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
              <span className="logo--text logo--text-bottom">Finland</span>
            </span>
          </h1>
        </Link>
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
