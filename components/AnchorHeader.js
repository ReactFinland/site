import React from "react";
import slugify from "./slugify";

const AnchorHeader = ({ level, anchor, children }) => {
  const id = slugify(
    anchor || (Array.isArray(children) ? children : [children]).join()
  );

  return React.createElement(`h${level}`, { className: "header" }, [
    <a className="header-anchor" href={`#${id}`} id={id} key="anchor" />,
    <span className="text" key="anchor-text">
      {children}
    </span>,
    <a className="header-anchor-select" href={`#${id}`} key="anchor-select">
      #
    </a>,
  ]);
};

export default AnchorHeader;
