import React from "react";
import Contacts from "./Contacts";
import Contact from "./Contact";
import Talk from "./Talk";
import SessionLink from "./SessionLink";

const Speaker = ({ talks, workshops, ...contact }) => (
  <Contact {...contact}>
    {talks && (
      <div className="speaker-talks">
        <h3>Talks</h3>
        <Contacts
          items={talks}
          render={Talk}
          renderProps={{ headerLevel: 4 }}
        />
      </div>
    )}
    {workshops &&
      workshops.every(({ title }) => title) && (
        <div className="speaker-workshops">
          <h3>Workshops</h3>
          <Contacts items={workshops} render={SessionLink("workshops")} />
        </div>
      )}
  </Contact>
);

export default Speaker;
