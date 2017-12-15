import React from "react";
import Session from "./Session";

const Sessions = ({ items }) => (
  <div className="content-block">
    {Object.keys(items).map((item, i) => (
      <Session item={items[item]} key={i} />
    ))}
  </div>
);

export default Sessions;
