import React from "react";
import PropTypes from "prop-types";
import { AnchorHeader, Markdown } from "components";

const TYPES = {
  KEYNOTE: "🗝",
  LIGHTNING_TALK: "⚡️",
  TALK: "🎙",
};

const Talk = ({
  title,
  description,
  urls,
  type,
  headerLevel = 2,
  day,
  begin,
  end,
}) => (
  <div className="content-block">
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <AnchorHeader level={headerLevel}>
        <span title={type}>{TYPES[type]}</span> {title || "To be announced."}
        <span style={{ marginLeft: "1em" }}>&nbsp;</span>
      </AnchorHeader>

      {day && begin && end && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {day}
          <div>
            <span x={`offsetByTimezone("${begin}")`}> </span>-
            <span x={`offsetByTimezone("${end}")`}></span>
            ,&nbsp;
            <span x="timezoneOffset()"></span>
          </div>
        </div>
      )}
    </div>

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

    {description ? <Markdown source={description} /> : "To be announced."}
  </div>
);
Talk.propTypes = {
  title: PropTypes.string,
  day: PropTypes.string,
  begin: PropTypes.string,
  end: PropTypes.string,
  description: PropTypes.string,
  urls: PropTypes.shape({
    slides: PropTypes.string,
    web: PropTypes.string,
  }),
  type: PropTypes.oneOf(Object.keys(TYPES)),
  headerLevel: PropTypes.number,
};

export default Talk;
