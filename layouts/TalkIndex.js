import React from "react";
import { content } from "@react-finland/content-2018";
import { AnchorHeader, Contacts, Session } from "../components";
import description from "./description";

const { keynotes, presentations, lightningTalks } = content;

const TalkIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block post-block-full" id="schedule">
      <AnchorHeader level={2}>Keynotes</AnchorHeader>
      <Contacts items={keynotes} render={Session} />

      <AnchorHeader level={2}>Presentations</AnchorHeader>
      <Contacts items={presentations} render={Session} />

      <AnchorHeader level={2}>Lightning Talks</AnchorHeader>
      <Contacts items={lightningTalks} render={Session} />
    </div>
  </div>
);
TalkIndex.description = description;

export default TalkIndex;
