import React from "react";
import Interactive from "antwar-interactive";
import { AnchorHeader, Markdown, VenueGallery, connect } from "components";

const ForAttendees = ({ page = {} }) => (
  <>
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
      <Interactive id="components/VenueGallery.js" component={VenueGallery} />
    </div>
    <AnchorHeader level={3}>The Venue Location</AnchorHeader>
    <div className="grid--full">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1TtRyfUF_tBBpKPf4MolkhdaN_3HHcG_9"
        width="100%"
        height="480"
        frameBorder="0"
      />
      <ul>
        <li>
          Blue star - Valkoinen Sali, the main venue and first workshop
          location. Aleksanterinkatu 16
        </li>
        <li>
          Green heart - Elisa Appelsiini, second workshop location. Kaarlenkatu
          11
        </li>
        <li>Red train - Main railway station</li>
        <li>Yellow swimmer - Allas Sea Pool</li>
        <li>Maroon drink - Sea Life Helsinki (afterparty). Tivolikuja 10</li>
      </ul>
    </div>
    <div className="grid--5col">
      <Markdown source={page.main} />
    </div>
  </>
);

export default connect(`
{
  page(id: "for-attendees") {
    intro, secondary, main
  }
}
`)(ForAttendees);
