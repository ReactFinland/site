import React from "react";
import values from "object.values";
import { AnchorHeader, Contacts, ContactMini, Markdown } from "../components";
import { content } from "@react-finland/content-2018";

const SiteIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full" id="schedule">
      <AnchorHeader level={2}>
        Learn More about React, Explore Finland
      </AnchorHeader>
      <Markdown source={require("../content/intro.md")} />

      <AnchorHeader level={2}>Speakers</AnchorHeader>
      <Contacts
        className="speakers"
        items={values(content.speakers)}
        render={ContactMini}
      />

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
