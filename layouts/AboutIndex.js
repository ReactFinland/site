import React from "react";
import Interactive from "antwar-interactive";
import { content } from "@react-finland/content-2018";
import {
  AnchorHeader,
  Contacts,
  Markdown,
  Organizer,
  VenueGallery,
} from "../components";

const AboutIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full">
      <Markdown source={require("../content/about-intro.md")} />

      <AnchorHeader level={2}>The Venue</AnchorHeader>
      <Markdown source={require("../content/venue.md")} />
      <Interactive
        id="components/VenueGallery.js"
        component={VenueGallery}
        containerProps={{ className: "venue-lightbox" }}
      />

      <AnchorHeader level={2}>The Organizers</AnchorHeader>
      <p>
        React Finland is organized as a community effort. All of us are
        developers and this shows in the conference.
      </p>
      <Contacts
        className="organizers"
        items={content.organizers}
        render={Organizer}
      />
      <p>
        Our goal is to connect our valued speakers with our local community in
        the most fruitful way we can and provide Finnish hospitality to our
        conference visitors.
      </p>

      <p>
        We hope to create something unique by combining our northern traditions
        with speakers and visitors from all around the world.
      </p>
    </div>
  </div>
);

export default AboutIndex;
