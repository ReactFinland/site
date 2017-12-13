import React from "react";

const AnchorHeader = ({ level, children }) => {
  const id = children
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

// patch ids (this.options.headerPrefix can be undefined!)
/*
renderer.heading = function heading(text, level, raw) {
  const id = raw.toLowerCase().replace(/`/g, "").replace(/[^\w]+/g, "-");

  return (
    `<h${level} class="header">` +
    `<a class="header-anchor" href="#${id}" id="${id}"></a>` +
    `<span class="text">${text}</span>` +
    `<a class="header-anchor-select" href="#${id}">#</a>` +
    `</h${level}>\n`
  );
};

*/
