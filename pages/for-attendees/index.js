import React, { Fragment } from "react";
import Interactive from "antwar-interactive";
import { content } from "@react-finland/content-2018";
import { AnchorHeader, Markdown } from "components";
import VenueGallery from "./VenueGallery";

const page = content.pages.find(({ id }) => id === "for-attendees");

const AttendeeIndex = ({ section }) => (
  <Fragment>
    <section className="intro intro_attendees">
      <div className="intro--main">
        <Markdown source={page.intro} />
      </div>
      <aside className="intro--aside" />
    </section>
    <AnchorHeader level={2}>The Venue</AnchorHeader>
    <div className="grid--5col">
      <Markdown source={page.secondary} />
    </div>
    <div className="grid--full">
      <Interactive
        id="pages/for-attendees/VenueGallery.js"
        component={VenueGallery}
        containerProps={{ className: "venue-lightbox" }}
      />
    </div>
    <div className="grid--5col">
      <Markdown source={page.main} />
    </div>
  </Fragment>
);

export default AttendeeIndex;
