import React from "react";
import { AnchorHeader, Markdown } from "../components";

const ScheduleIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full" id="schedule">
      <AnchorHeader level={2}>Schedule</AnchorHeader>
      <Markdown source={require("../content/schedule.md")} />
    </div>
  </div>
);
ScheduleIndex.description =
  "React Finland is a conference that comes with a workshop day and two days of presentations.";

export default ScheduleIndex;
