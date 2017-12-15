import React from "react";

const AnchorHeader = ({ level, anchor, children }) => {
  const idBase = [anchor] || (Array.isArray(children) ? children : [children]);

  const id = idBase
    .join()
    .toLowerCase()
    .replace(/`/g, "")
    .replace(/[^\w]+/g, "-");

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
