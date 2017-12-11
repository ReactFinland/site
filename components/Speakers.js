import React from "react";
import Speaker from "../components/Speaker";

const Speakers = ({ speakers }) => (
  <div className="content-block">
    {Object.keys(speakers).map((speaker, i) => (
      <Speaker speaker={speakers[speaker]} key={i} />
    ))}
  </div>
);

export default Speakers;
