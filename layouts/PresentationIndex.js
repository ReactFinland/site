import React from "react";
import { ContentBlock, SocialLinks, Speakers } from "../components";
import {
  keynotes,
  lightningTalks,
  presentations,
} from "@react-finland/content-2018";

const PresentationIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block post-block-full" id="schedule">
      <h2>Keynotes</h2>
      <Speakers speakers={keynotes} />

      <h2>Presentations</h2>
      <Speakers speakers={presentations} />

      <h2>Lightning Talks</h2>
      <Speakers speakers={lightningTalks} />
    </div>
  </div>
);
PresentationIndex.description =
  "React Finland is a conference that comes with a workshop day and two days of presentations.";

export default PresentationIndex;
