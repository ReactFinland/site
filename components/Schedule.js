import React from "react";
import AnchorHeader from "./AnchorHeader";
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

const SpeakerPhotos = ({ speakers = [] }) => (
  <div className="speaker-photos">
    {speakers.map(({ image }, i) => (
      <img
        className="photo"
        width={40}
        height={40}
        src={require(`@react-finland/content-2018/images/${image}`)}
      />
    ))}
  </div>
);

const Schedule = ({ items: { intervals } }) => (
  <dl className="schedule">
    {intervals.map(({ begin, end, sessions }, i) => [
      <dt key={`dt-${i}`}>
        {begin} - {end}
      </dt>,
      <dd key={`dd-${i}`}>
        {sessions.map(({ title, description, speakers, keywords }, i) => (
          <div className="session" key={`session-${i}`}>
            <AnchorHeader level={3} anchor={title} key={`title-${i}`}>
              {title} {title && speakers && "-"}{" "}
              <SpeakerNames key={`speaker-names-${i}`} speakers={speakers} />
              <SpeakerPhotos key={`speaker-photos-${i}`} speakers={speakers} />
            </AnchorHeader>
            {description && (
              <Markdown key={`description-${i}`} source={description} />
            )}
            {keywords && <Keywords key={`keywords-${i}`} items={keywords} />}
          </div>
        ))}
      </dd>,
    ])}
  </dl>
);

export default Schedule;
