import React from "react";
import { AnchorHeader, Markdown } from "../components";

const SiteIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full" id="schedule">
      <AnchorHeader level={2}>
        Learn More about React, Explore Finland
      </AnchorHeader>
      <Markdown source={require("../content/intro.md")} />

      <AnchorHeader level={2}>Schedule</AnchorHeader>
      <Markdown source={require("../content/schedule.md")} />

      <AnchorHeader level={2}>Venue</AnchorHeader>
      <Markdown source={require("../content/venue.md")} />

      <AnchorHeader level={2}>Tickets</AnchorHeader>
      <tito-widget event="react-finland/2018" />
    </div>
  </div>
);
SiteIndex.description =
  "React Finland is a conference that comes with a workshop day and two days of presentations.";

export default SiteIndex;
