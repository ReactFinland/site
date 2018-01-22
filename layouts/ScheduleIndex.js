import React from "react";
import { AnchorHeader, Markdown } from "../components";
import description from "./description";

const ScheduleIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full" id="schedule">
      <Markdown source={require("../content/schedule.md")} />
    </div>
  </div>
);
ScheduleIndex.description = description;
ScheduleIndex.title = "Schedule";

export default ScheduleIndex;
