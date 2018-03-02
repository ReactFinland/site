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
        <div className="countdown">
          <p>{days} Days&#160;</p>
        </div>
        <div className="countdown">
          <p>{hours} Hours&#160;</p>
        </div>
        <div className="countdown">
          <p>{minutes} Minutes&#160;</p>
        </div>
        <div className="countdown">
          <p>{seconds} seconds</p>
        </div>
      </div>
    );
  }
}
Countdown.propTypes = {
  initialDate: PropTypes.string,
};

export default Countdown;
