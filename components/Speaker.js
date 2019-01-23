import React from "react";
import PropTypes from "prop-types";
import { AnchorHeader, Contact, Contacts } from "components";
import SessionLink from "./SessionLink";
import Talk from "./Talk.js";

const Speaker = ({ talks, workshops, ...contact }) => (
  <Contact {...contact}>
    {talks &&
      talks.length > 0 && (
        <div className="speaker-talks">
          <AnchorHeader level={3}>Talks</AnchorHeader>
          <Contacts
            items={talks}
            render={Talk}
            renderProps={{ headerLevel: 4 }}
          />
        </div>
      )}
    {workshops &&
      workshops.length > 0 &&
      workshops.every(({ title }) => title) && (
        <div className="speaker-workshops">
          <AnchorHeader level={3}>Workshops</AnchorHeader>
          <Contacts
            items={workshops}
            render={SessionLink("workshops")}
            renderProps={{ headerLevel: 4 }}
          />
        </div>
      )}
  </Contact>
);
Speaker.propTypes = {
  talks: PropTypes.array,
  workshops: PropTypes.array,
  contact: PropTypes.object,
};

export default Speaker;
