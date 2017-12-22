import React from "react";
import Session from "./Session";

const Sessions = ({ items }) => (
  <div className="content-block">
    {items.map((item, i) => <Session {...item} key={i} />)}
  </div>
);

export default Sessions;
