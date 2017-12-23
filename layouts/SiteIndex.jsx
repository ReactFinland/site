import React from "react";
import values from "object.values";
import { content } from "@react-finland/content-2018";
import { AnchorHeader, Contacts, Markdown } from "../components";

const SiteIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full" id="schedule">
      <AnchorHeader level={2}>
        Learn More about React, Explore Finland
      </AnchorHeader>
      <Markdown source={require("../content/intro.md")} />

      <AnchorHeader level={2}>Venue</AnchorHeader>
      <Markdown source={require("../content/venue.md")} />

      <AnchorHeader level={2}>Tickets</AnchorHeader>
      <tito-widget event="react-finland/2018" />

      <AnchorHeader level={2}>Organization</AnchorHeader>
      <Markdown source={require("../content/about-organization.md")} />

      <AnchorHeader level={2}>Organizers</AnchorHeader>
      <Contacts className="organizers" items={values(content.organizers)} />
    </div>
  </div>
);
SiteIndex.description =
  "React Finland is a conference that comes with a workshop day and two days of presentations.";

export default SiteIndex;
