import React from "react";
import { ContentBlock, SocialLinks, Speakers } from "../components";
import { workshops } from "@react-finland/content-2018";

const WorkshopIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full" id="schedule">
      <Speakers speakers={workshops} />
    </div>
  </div>
);
WorkshopIndex.description =
  "React Finland is a conference that comes with a workshop day and two days of presentations.";

export default WorkshopIndex;
