import React, { Fragment } from "react";
import Interactive from "antwar-interactive";
import { AnchorHeader, Markdown, connect } from "components";
import VenueGallery from "./VenueGallery";

const ForAttendees = ({ page = {} }) => (
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

export default connect(`
{
  page(id: "for-attendees") {
    intro, secondary, main
  }
}
`)(ForAttendees);
