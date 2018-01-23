import React from "react";
import { AnchorHeader, Markdown } from "../components";

const ScheduleIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full" id="schedule">
      <Markdown source={require("../content/schedule.md")} />
    </div>
  </div>
);

export default ScheduleIndex;
