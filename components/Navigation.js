import React from "react";
import classnames from "classnames";
import Link from "./Link";

const NavigationRow = ({ links, pathname, ...props }) => (
  <ul {...props} className={classnames("nav--row", props.className)}>
    {links.map((link, i) => {
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
    {pages.map(({ links, props }, i) => (
      <NavigationRow key={i} links={links} pathname={pathname} {...props} />
    ))}
  </nav>
);

export default Navigation;
