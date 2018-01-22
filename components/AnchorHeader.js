import React from "react";
import PropTypes from "prop-types";

const AnchorHeader = ({ level, anchor, children, ...props }, { getId }) => {
  let id = getId(anchor, children);

  return React.createElement(
    `h${level}`,
    { className: "heading", ...props, id },
    [
      <a className="heading--anchor" href={`#${id}`} key="anchor-select">
        {children}
      </a>,
    ]
  );
};
AnchorHeader.contextTypes = {
  getId: PropTypes.func,
};

export default AnchorHeader;
