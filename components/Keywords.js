import React from "react";

const Keywords = ({ items }) => (
  <ul className="keywords">
    {items.map(keyword => (
      <li className="keyword" key={keyword}>
        {keyword}
      </li>
    ))}
  </ul>
);

export default Keywords;
