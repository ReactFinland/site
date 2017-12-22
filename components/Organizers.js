import React from "react";
import Speaker from "./Speaker";

const Organizers = ({ items }) => (
  <div className="organizers">
    {items.map(organizer => <Speaker {...organizer} key={organizer.name} />)}
  </div>
);

export default Organizers;
