import React from "react";
import ScheduleIcon from "./ScheduleIcon";
import scheduleTypes from "./schedule-types";

const ScheduleLegend = () => (
  <fieldset className="legend">
    <legend>Legend</legend>

    {Object.keys(scheduleTypes).map(type => (
      <label key={`icon-${type}`}>
        <ScheduleIcon type={type} />
        <span className="title">{scheduleTypes[type].title}</span>
      </label>
    ))}
  </fieldset>
);

export default ScheduleLegend;
