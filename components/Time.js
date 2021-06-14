import React from "react";
import PropTypes from "prop-types";

class Time extends React.Component {
  render() {
    const { begin, end } = this.props;

    return (
      <span>
        {offsetByTimezone(begin)}-{offsetByTimezone(end)}
      </span>
    );
  }
}
Time.propTypes = {
  begin: PropTypes.string,
  end: PropTypes.string,
};

function offsetByTimezone(time) {
  const tzOffset = new Date().getTimezoneOffset() / 60;
  const [hours, minutes] = time.split(":");
  const hoursWithOffset = (hours - tzOffset) % 24;

  return `${
    hoursWithOffset >= 0 ? hoursWithOffset : 24 + hoursWithOffset
  }:${minutes}`;
}

export default Time;
