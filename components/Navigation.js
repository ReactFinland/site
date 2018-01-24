import React from "react";
import classnames from "classnames";
import Link from "./Link";

const Navigation = ({ pages, pathname }) => (
  <nav className="nav">
    <ul>
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
  </nav>
);

export default Navigation;
