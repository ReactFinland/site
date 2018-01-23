import React from "react";
import { AnchorHeader, Contacts, Markdown } from "../components";

const SponsorIndex = ({ section }) => (
  <div className="grid--5col">
    <Markdown source={require("../content/for-sponsors.md")} />
  </div>
);

export default SponsorIndex;
