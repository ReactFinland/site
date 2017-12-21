import React from "react";

const Keywords = ({ items }) => (
  <div className="keywords">
    {items.map(keyword => (
      <div className="keyword" key={keyword}>
        {keyword}
      </div>
    ))}
  </div>
);

export default Keywords;
