import React from "react";
import Contact from "./Contact";

// TODO: render keynotes, lightningTalks, presentations
const Speaker = ({ keynotes, lightningTalks, presentations, ...contact }) => (
  <Contact {...contact} />
);

export default Speaker;
