import React from "react";
import Markdown from "./Markdown";
import Keywords from "./Keywords";
import slugify from "./slugify";

const SpeakerNames = ({ speakers = [] }) => (
  <div className="speaker-names">
    {speakers.map(({ name }, i) => [
      speakers.length > 1 &&
        i === speakers.length - 1 && <span key={`and-${i}`}> and </span>,
      <a
        key={`name-${i}`}
        className="speaker-name"
        href={`/speakers/#${slugify(name)}`}
      >
        {name}
      </a>,
    ])}
  </div>
);

const Schedule = ({ items: { intervals } }) => (
  <dl className="schedule">
    {intervals.map(({ begin, end, sessions }, i) => [
      <dt key={`dt-${i}`}>
        {begin} - {end}
      </dt>,
      <dd key={`dd-${i}`}>
        {sessions.map(({ title, description, speakers, keywords }, i) => [
          <h3 key={`title-${i}`}>
            {title} {title && speakers && "-"}{" "}
            <SpeakerNames key={`speaker-names-${i}`} speakers={speakers} />
          </h3>,
          <Markdown
            key={`description-${i}`}
            source={description || "Not announced yet."}
          />,
          keywords && <Keywords key={`keywords-${i}`} items={keywords} />,
        ])}
      </dd>,
    ])}
  </dl>
);

export default Schedule;
