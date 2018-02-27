var React = require("react");
import PropTypes from "prop-types";
import timediff from "timediff";
class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = { date: props.initialDate, now: Date.now() };
    this.TimeDiff = this.timeDiff();
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }
  tick() {
    this.setState({ now: Date.now() });
    this.TimeDiff = this.timeDiff();
  }
  timeDiff() {
    return timediff(this.state.now, this.state.date, "D:H:m:S");
  }
  render() {
    return (
      <div>
        <p>
          {this.TimeDiff.days} Days&#160;
          {this.TimeDiff.hours} Hours&#160;
          {this.TimeDiff.minutes} Minutes&#160;
          {this.TimeDiff.seconds} seconds
        </p>
      </div>
    );
  }
}
Countdown.propTypes = {
  initialDate: PropTypes.string,
};

export default Countdown;
