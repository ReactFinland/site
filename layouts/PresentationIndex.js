import React from "react";
import values from "object.values";
import { content, schema } from "@react-finland/content-2018";
import { AnchorHeader, Contacts, Session } from "../components";
import description from "./description";

const { presentations } = content;
const { enums } = schema;

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
PresentationIndex.description = description;

export default PresentationIndex;
