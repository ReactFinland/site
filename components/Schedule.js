const React = require("react"); // XXX: imports aren't transpiled in Node
const ReactMarkdown = require("react-markdown");

// TODO: Replace wrapper divs with fragments in React 16
const Schedule = ({ items }) => (
  <dl className="schedule">
    {items.map(({ interval, description }) => (
      <div key={interval.begin + interval.end}>
        <dt>
          {interval.begin} - {interval.end}
        </dt>
        <dd>
          <ReactMarkdown source={description} />
        </dd>
      </div>
    ))}
  </dl>
);

module.exports = Schedule;
