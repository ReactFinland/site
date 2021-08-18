import React from "react";
import PropTypes from "prop-types";
import AnchorHeader from "./AnchorHeader";
import Markdown from "./Markdown";
import Keywords from "./Keywords";
import ScheduleIcon from "./ScheduleIcon";
import SessionSpeakers from "./SessionSpeakers";
import slugify from "../utils/slugify";

// TODO: Handle sessions inside sessions
const Schedule = ({ intervals, prefix }) => (
  <dl className="schedule">
    {intervals.map(
      (
        { begin, end, sessions, title: sessionTitle, mc, location, urls },
        i
      ) => [
        <dt className={`schedule--title ${getType(sessions)}`} key={`dt-${i}`}>
          <div>
            <span x={`offsetByTimezone("${begin}")`}></span>-
            <span x={`offsetByTimezone("${end}")`}></span>
          </div>
          <span x="timezoneOffset()"></span>
        </dt>,
        <dd className="schedule--definition" key={`dd-${i}`}>
          {sessionTitle && (
            <div className="flex-row space-between">
              <AnchorTitle
                key={`title-${i}`}
                title={sessionTitle}
                mc={mc}
                prefix={prefix}
              />
              {urls && urls.video && <a href={urls.video}>YouTube stream</a>}
            </div>
          )}
          {sessions.map(
            ({ title, type, description, speakers, keywords, urls }, i) => (
              <div className="session" key={`session-${i}`}>
                {type === "WORKSHOP" ? (
                  <WorkshopTitle key={i} title={title} type={type} />
                ) : (
                  <AnchorTitle
                    key={i}
                    title={title}
                    type={type}
                    speakers={speakers}
                    level={sessionTitle ? 4 : 3}
                    prefix={prefix}
                  />
                )}
                <p>
                  {urls && urls.slides && (
                    <a
                      href={urls.slides}
                      style={{ fontSize: "small" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Slides (PDF)
                    </a>
                  )}
                  {urls && urls.web && (
                    <>
                      <span style={{ marginLeft: "1em" }}>&nbsp;</span>
                      <a
                        href={urls.web}
                        style={{ fontSize: "small" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Slides (web)
                      </a>
                    </>
                  )}
                  {urls && urls.video && (
                    <>
                      <span style={{ marginLeft: "1em" }}>&nbsp;</span>
                      <a
                        href={urls.video}
                        style={{ fontSize: "small" }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Video
                      </a>
                    </>
                  )}
                </p>
                {type !== "WORKSHOP" && description && (
                  <Markdown
                    key={`description-${i}`}
                    source={description}
                    escapeHtml={false}
                  />
                )}
                {location && <Location {...location} />}
                {keywords && (
                  <Keywords key={`keywords-${i}`} items={keywords} />
                )}
              </div>
            )
          )}
        </dd>,
      ]
    )}
  </dl>
);
Schedule.propTypes = {
  intervals: PropTypes.array,
  prefix: PropTypes.number,
};

// TODO: If there are multiple sessions, how to resolve type? -> mixed?
function getType(sessions) {
  return sessions.length && sessions[0].type.toLowerCase();
}

function Location({ name, social: { googleMaps }, address, city }) {
  return (
    <div>
      <div>
        {name} {address}, {city}
      </div>
      <div>
        <a href={googleMaps}>Google Maps</a>
      </div>
    </div>
  );
}

const titlePropTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  speakers: PropTypes.array,
};

const WorkshopTitle = ({ title, type }) => (
  <AnchorHeader level={3} anchor={title}>
    <ScheduleIcon type={type} />
    <a href={`/workshops#${slugify(title)}`}>{title}</a>{" "}
  </AnchorHeader>
);
WorkshopTitle.propTypes = titlePropTypes;

const AnchorTitle = ({ title, type, speakers, mc, level = 3, prefix }) => (
  <AnchorHeader level={level} anchor={title}>
    <ScheduleIcon type={type} />
    {title} {title && speakers && speakers.length > 0 && "—"}{" "}
    {speakers && speakers.length > 0 && (
      <SessionSpeakers
        key={`speaker-names`}
        speakers={speakers}
        prefix={prefix}
      />
    )}
    {mc && (
      <img
        className="speaker-name--photo photo"
        alt={mc.name}
        width={32}
        height={32}
        src={mc.image.url}
      />
    )}
  </AnchorHeader>
);
AnchorTitle.propTypes = titlePropTypes;

export default Schedule;
