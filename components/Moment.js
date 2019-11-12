import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const Moment = ({ className, datetime, format = "D MMM YYYY" }) => (
  <time dateTime={datetime} className={className}>
    {moment(datetime).format(format)}
  </time>
);

Moment.propTypes = {
  className: PropTypes.string,
  datetime: PropTypes.string,
  format: PropTypes.string,
};

export default Moment;
