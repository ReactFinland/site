const React = require("react"); // XXX: imports aren't transpiled in Node
const Markdown = require("./Markdown");

const SpeakerNames = ({ speakers = [] }) => (
  <span>{speakers.map(({ name }) => name).join(" and ")}</span>
);

// TODO: Replace wrapper divs with fragments in React 16
const Schedule = ({ items: { intervals } }) => (
  <dl className="schedule">
    {intervals.map(({ begin, end, sessions }) => (
      <div key={begin + end}>
        <dt>
          {begin} - {end}
        </dt>
        <dd>
          {sessions.map(({ title, description, speakers }, i) => (
            <div key={`session-${i}`}>
              <h3>
                {title} {title && "-"} <SpeakerNames speakers={speakers} />
              </h3>
              <Markdown source={description || "Not announced yet."} />
            </div>
          ))}
        </dd>
      </div>
    ))}
  </dl>
);

module.exports = Schedule;
