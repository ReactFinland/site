import React from "react";
import { Speakers } from "../components";
import { speakers } from "@react-finland/content-2018";

const SpeakerIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full" id="schedule">
      <Speakers items={Object.values(speakers)} />
    </div>
  </div>
);
SpeakerIndex.description =
  "React Finland is a conference that comes with a workshop day and two days of presentations.";

export default SpeakerIndex;
