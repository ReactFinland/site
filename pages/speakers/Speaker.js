import React from "react";
import { Contact, Contacts, Talk } from "../components";
import SessionLink from "./SessionLink";

const Speaker = ({ talks, workshops, ...contact }) => (
  <Contact {...contact}>
    {talks && (
      <div className="speaker-talks">
        <Contacts
          items={talks}
          render={Talk}
          renderProps={{ headerLevel: 3 }}
        />
      </div>
    )}
    {workshops &&
      workshops.every(({ title }) => title) && (
        <div className="speaker-workshops">
          <Contacts items={workshops} render={SessionLink("workshops")} />
        </div>
      )}
  </Contact>
);

export default Speaker;
