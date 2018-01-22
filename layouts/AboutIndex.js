import React from "react";
import Interactive from "antwar-interactive";
import { content } from "@react-finland/content-2018";
import { AnchorHeader, Contacts, Markdown, VenueGallery } from "../components";
import description from "./description";

const AboutIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full">
      <AnchorHeader level={2}>About the Organization</AnchorHeader>
      <Markdown source={require("../content/about-organization.md")} />

      <AnchorHeader level={2}>The Venue</AnchorHeader>
      <Markdown source={require("../content/venue.md")} />
      <Interactive
        id="components/VenueGallery.js"
        component={VenueGallery}
        containerProps={{ className: "venue-lightbox" }}
      />

      <AnchorHeader level={2}>The Organizers</AnchorHeader>
      <Contacts className="organizers" items={content.organizers} />
    </div>
  </div>
);
AboutIndex.description = description;

export default AboutIndex;
