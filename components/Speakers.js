import React from "react";
import Speaker from "./Speaker";

const Speakers = ({ items }) => (
  <div className="speakers">
    {items.map(speaker => <Speaker {...speaker} key={speaker.name} />)}
  </div>
);

export default Speakers;
