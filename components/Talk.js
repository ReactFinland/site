import React from "react";
import PropTypes from "prop-types";
import { AnchorHeader, Markdown } from "components";

const TYPES = {
  KEYNOTE: "🗝",
  LIGHTNING_TALK: "⚡️",
  TALK: "🎙",
};

const Talk = ({ title, description, urls, type, headerLevel = 2 }) => (
  <div className="content-block">
    <AnchorHeader level={headerLevel}>
      <span title={type}>{TYPES[type]}</span> {title || "To be announced."}
      <span style={{ marginLeft: "1em" }}>&nbsp;</span>
    </AnchorHeader>
    <p>
      {urls &&
        urls.slides && (
          <a
            href={urls.slides}
            style={{ fontSize: "small" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Slides (PDF)
          </a>
        )}

      {urls &&
        urls.web && (
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
    </p>

    {description ? <Markdown source={description} /> : "To be announced."}
  </div>
);
Talk.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  urls: PropTypes.shape({
    slides: PropTypes.string,
    web: PropTypes.string,
  }),
  type: PropTypes.oneOf(Object.keys(TYPES)),
  headerLevel: PropTypes.number,
};

export default Talk;
