import React from "react";
import PropTypes from "prop-types";
import timediff from "timediff";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.updateCountdown = this.updateCountdown.bind(this);
    this.state = {
      currentDate: Date.now(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.updateCountdown, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateCountdown() {
    this.setState({ currentDate: Date.now() });
  }

  render() {
    const { days, hours, minutes, seconds } = timediff(
      this.state.currentDate,
      this.props.toDate,
      "D:H:m:S"
    );
    return (
      <div>
        <h3 className="countdown--header">Till the event:</h3>
        <div className="countdown--item">{days} days</div>
        <div className="countdown--item">{hours}h</div>
        <div className="countdown--item">{minutes}m</div>
        <div className="countdown--item">{seconds}s</div>
      </div>
    );
  }
}
Countdown.propTypes = {
  initialDate: PropTypes.string,
  toDate: PropTypes.string,
};

export default Countdown;
