import React from "react";
import { content } from "@react-finland/content-2018";
import { Contacts } from "components";
import Speaker from "./Speaker";

const SpeakerIndex = ({ section }) => (
  <div className="grid--5col" id="schedule">
    <Contacts className="speakers" items={content.speakers} render={Speaker} />
  </div>
);

export default SpeakerIndex;
