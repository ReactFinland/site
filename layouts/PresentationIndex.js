import React from "react";
import values from "object.values";
import { presentations } from "@react-finland/content-2018";
import enums from "@react-finland/content-2018/src/enums"; // XXX
import { AnchorHeader, Contacts, Session } from "../components";

const PresentationIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block post-block-full" id="schedule">
      <AnchorHeader level={2}>Keynotes</AnchorHeader>
      <Contacts
        items={values(presentations).filter(
          ({ type }) => type === enums.KEYNOTE
        )}
        render={Session}
      />

      <AnchorHeader level={2}>Presentations</AnchorHeader>
      <Contacts
        items={values(presentations).filter(({ type }) => !type)}
        render={Session}
      />

      <AnchorHeader level={2}>Lightning Talks</AnchorHeader>
      <Contacts
        items={values(presentations).filter(
          ({ type }) => type === enums.LIGHTNING_TALK
        )}
        render={Session}
      />
    </div>
  </div>
);
PresentationIndex.description =
  "React Finland is a conference that comes with a workshop day and two days of presentations.";

export default PresentationIndex;
