import React from "react";
import Contacts from "./Contacts";
import Contact from "./Contact";
import Session from "./Session";
import SessionLink from "./SessionLink";

const Speaker = ({
  keynotes,
  lightningTalks,
  presentations,
  workshops,
  ...contact
}) => (
  <Contact {...contact}>
    {keynotes &&
      keynotes.every(({ title }) => title) && (
        <div>
          <h3>Keynotes</h3>
          <Contacts
            items={keynotes}
            render={Session}
            renderProps={{ headerLevel: 4 }}
          />
        </div>
      )}
    {presentations &&
      presentations.every(({ title }) => title) && (
        <div>
          <h3>Presentations</h3>
          <Contacts
            items={presentations}
            render={Session}
            renderProps={{ headerLevel: 4 }}
          />
        </div>
      )}
    {lightningTalks &&
      lightningTalks.every(({ title }) => title) && (
        <div>
          <h3>Lightning Talks</h3>
          <Contacts
            items={lightningTalks}
            render={Session}
            renderProps={{ headerLevel: 4 }}
          />
        </div>
      )}
    {workshops &&
      workshops.every(({ title }) => title) && (
        <div>
          <h3>Workshops</h3>
          <Contacts items={workshops} render={SessionLink("workshops")} />
        </div>
      )}
  </Contact>
);

export default Speaker;
