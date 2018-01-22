import React from "react";
import { AnchorHeader, Contacts, Markdown } from "../components";
import description from "./description";

const SponsorIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full">
      <Markdown source={require("../content/for-sponsors.md")} />
    </div>
  </div>
);
SponsorIndex.description = description;
SponsorIndex.title = "For Sponsors";

export default SponsorIndex;
