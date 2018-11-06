import React from "react";
import PropTypes from "prop-types";
import scheduleTypes from "./schedule-types";

const ScheduleIcon = ({ type }) =>
  scheduleTypes[type] ? (
    <abbr title={scheduleTypes[type].title}>{scheduleTypes[type].icon}</abbr>
  ) : null;
ScheduleIcon.propTypes = {
  type: PropTypes.string,
};

export default ScheduleIcon;
