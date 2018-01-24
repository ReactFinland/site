import React from "react";
import classnames from "classnames";
import Link from "./Link";

const NavigationRow = ({ pages, pathname }) => (
  <ul className="nav--row">
    {pages.map((link, i) => {
      const linkClassNames = classnames("nav--link", {
        "nav--link_selected": link.url && link.url === pathname,
      });
      return (
        <li key={`link-${i}`} className={linkClassNames}>
          {link.url ? <Link to={link.url}>{link.title}</Link> : link.title}
        </li>
      );
    })}
  </ul>
);

const Navigation = ({ pages, pathname }) => (
  <nav className="nav">
    {pages.map((rowPages, i) => (
      <NavigationRow key={i} pages={rowPages} pathname={pathname} />
    ))}
  </nav>
);

export default Navigation;
