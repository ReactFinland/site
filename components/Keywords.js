import React from "react";
import PropTypes from "prop-types";

const Keywords = ({ items }) => (
  <ul className="keywords">
    {items.map(keyword => (
      <li className="keyword" key={keyword}>
        {keyword}
      </li>
    ))}
  </ul>
);
Keywords.propTypes = {
  items: PropTypes.array,
};

export default Keywords;
