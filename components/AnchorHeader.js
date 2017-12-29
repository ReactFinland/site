import React from "react";
import PropTypes from "prop-types";

const AnchorHeader = ({ level, anchor, children }, { getId }) => {
  let id = getId(anchor, children);

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
AnchorHeader.contextTypes = {
  getId: PropTypes.func,
};

export default AnchorHeader;
