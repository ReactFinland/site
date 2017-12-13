import React from "react";
import { ContentBlock } from "../components";

const SiteIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full" id="schedule">
      <ContentBlock name="schedule" type="md" />
    </div>
  </div>
);
SiteIndex.description =
  "React Finland is a conference that comes with a workshop day and two days of presentations.";

export default SiteIndex;
