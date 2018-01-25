import React, { Fragment } from "react";
import Interactive from "antwar-interactive";
import { AnchorHeader, Contacts, Markdown, VenueGallery } from "../components";

const AttendeeIndex = ({ section }) => (
  <Fragment>
    <section className="intro intro_attendees">
      <div className="intro--main">
        <Markdown source={require("../content/for-attendees-intro.md")} />
      </div>
      <aside className="intro--aside" />
    </section>
    <AnchorHeader level={2}>The Venue</AnchorHeader>
    <div className="grid--5col">
      <Markdown source={require("../content/venue.md")} />
    </div>
    <div className="grid--full">
      <Interactive
        id="components/VenueGallery.js"
        component={VenueGallery}
        containerProps={{ className: "venue-lightbox" }}
      />
    </div>
    <div className="grid--5col">
      <Markdown source={require("../content/for-attendees.md")} />
    </div>
  </Fragment>
);

export default AttendeeIndex;
