import React from "react";
import slugify from "./slugify";

// XXXXX: Global store to avoid generating duplicate ids. Push this elsewhere?
const ids = {}; // { id: index }. Example: { foo: 1 }

const AnchorHeader = ({ level, anchor, children }) => {
  let id = slugify(
    anchor || (Array.isArray(children) ? children : [children]).join()
  );

  // Check for duplicate id
  if (ids[id]) {
    ids[id]++;

    id += `-${ids[id]}`;
  } else {
    ids[id] = 1;
  }

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
