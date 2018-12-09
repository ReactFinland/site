import React from "react";
import ScheduleIcon from "./ScheduleIcon";
import scheduleTypes from "./schedule-types";

const ScheduleLegend = () => (
  <fieldset className="legend">
    <legend>Legend</legend>

    {Object.keys(scheduleTypes).map(type => (
      <div className="legend--label" key={`icon-${type}`}>
        <ScheduleIcon type={type} />
        <span className="legend--title">{scheduleTypes[type].title}</span>
      </div>
    ))}
  </fieldset>
);

export default ScheduleLegend;
