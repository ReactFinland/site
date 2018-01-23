import React from "react";
import { AnchorHeader, Contacts, Markdown } from "../components";

const SponsorIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full">
      <Markdown source={require("../content/for-sponsors.md")} />
    </div>
  </div>
);

export default SponsorIndex;
