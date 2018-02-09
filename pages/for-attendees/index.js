import React, { Fragment } from "react";
import Interactive from "antwar-interactive";
import { AnchorHeader, Markdown } from "components";
import VenueGallery from "./VenueGallery";

const AttendeeIndex = ({ section }) => (
  <Fragment>
    <section className="intro intro_attendees">
      <div className="intro--main">
        <Markdown source={require("./intro.md")} />
      </div>
      <aside className="intro--aside" />
    </section>
    <AnchorHeader level={2}>The Venue</AnchorHeader>
    <div className="grid--5col">
      <Markdown source={require("./venue.md")} />
    </div>
    <div className="grid--full">
      <Interactive
        id="pages/for-attendees/VenueGallery.js"
        component={VenueGallery}
        containerProps={{ className: "venue-lightbox" }}
      />
    </div>
    <div className="grid--5col">
      <Markdown source={require("./content.md")} />
    </div>
  </Fragment>
);

export default AttendeeIndex;
