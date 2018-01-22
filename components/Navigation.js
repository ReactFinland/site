import React from "react";
import Link from "./Link";

const Navigation = ({ pages, pathname, title }) =>
  console.log(title) || (
    <div className="nav__wrapper">
      <input type="checkbox" className="nav__toggle" id="nav__toggle" />
      <label className="nav__toggle-label" htmlFor="nav__toggle" />
      <nav className="nav">
        {pages.map(
          (link, i) =>
            link.url === pathname ? (
              <div key={`link-${i}`} className="nav__selected__link">
                {link.title}
              </div>
            ) : (
              <div key={`link-${i}`} className="nav__link">
                {link.url ? (
                  <Link to={link.url}>{link.title}</Link>
                ) : (
                  link.title
                )}
              </div>
            )
        )}
      </nav>
    </div>
  );

export default Navigation;
