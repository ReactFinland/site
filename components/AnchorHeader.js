import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

const AnchorHeader = ({ level, anchor, className, children }, { getId }) => {
  let id = getId && getId(anchor, children);

  return React.createElement(
    `h${level}`,
    { className: cx("heading", className) },
    [
      <span className="text" key="anchor-text" id={id}>
        {children}
      </span>,
      <a className="heading--anchor-select" href={`#${id}`} key="anchor-select">
        #
      </a>,
    ]
  );
};
AnchorHeader.contextTypes = {
  getId: PropTypes.func,
};
AnchorHeader.propTypes = {
  level: PropTypes.number,
  className: PropTypes.string,
  anchor: PropTypes.string,
  children: PropTypes.node,
};

export default AnchorHeader;
