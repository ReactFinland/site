import React from "react";
import { AnchorHeader, Markdown } from "../components";

const ScheduleIndex = ({ section }) => (
  <div className="grid--5col" id="schedule">
    <Markdown source={require("../content/schedule.md")} />
  </div>
);

export default ScheduleIndex;
