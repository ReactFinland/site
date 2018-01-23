import React from "react";
import { content } from "@react-finland/content-2018";
import { Contacts, Speaker } from "../components";

const SpeakerIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full" id="schedule">
      <Contacts
        className="speakers"
        items={content.speakers}
        render={Speaker}
      />
    </div>
  </div>
);

export default SpeakerIndex;
