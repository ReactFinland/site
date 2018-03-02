import React from "react";
import PropTypes from "prop-types";
import timediff from "timediff";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.updateCountdown = this.updateCountdown.bind(this);
    this.dateToCountDownTo = props.initialDate;
    this.currentDate = Date.now();
    this.Difference = this.getDifferenceInDates();
    this.state = {
      days: this.Difference.days,
      hours: this.Difference.hours,
      minutes: this.Difference.minutes,
      seconds: this.Difference.seconds,
    };
  }

  componentDidMount() {
    setInterval(this.updateCountdown, 1000);
  }

  updateCountdown() {
    this.currentDate = Date.now();
    this.Difference = this.getDifferenceInDates();
    this.updateState();
  }

  updateState() {
    //days, hours, minutes and seconds left until the dateToCountDownTo
    this.setState({
      days: this.Difference.days,
      hours: this.Difference.hours,
      minutes: this.Difference.minutes,
      seconds: this.Difference.seconds,
    });
  }

  getDifferenceInDates() {
    return timediff(this.currentDate, this.dateToCountDownTo, "D:H:m:S");
  }

  render() {
    return (
      <div>
        <div class="countdown">
          <p>{this.state.days} Days&#160;</p>
        </div>
        <div class="countdown">
          <p>{this.state.hours} Hours&#160;</p>
        </div>
        <div class="countdown">
          <p>{this.state.minutes} Minutes&#160;</p>
        </div>
        <div class="countdown">
          <p>{this.state.seconds} seconds</p>
        </div>
      </div>
    );
  }
}
Countdown.propTypes = {
  initialDate: PropTypes.string,
};

export default Countdown;
