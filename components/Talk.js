import React from "react";
import PropTypes from "prop-types";
import { AnchorHeader, Markdown } from "components";

const TYPES = {
  keynote: "🗝",
  lightningTalk: "⚡️",
  presentation: "🎙",
};

const Talk = ({
  title,
  description,
  urls: { slides },
  type,
  headerLevel = 2,
}) => (
  <div className="content-block">
    <AnchorHeader level={headerLevel}>
      <span title={type}>{TYPES[type]}</span> {title || "To be announced."}
      <span style={{ marginLeft: "1em" }}>&nbsp;</span>
      <a href={slides} style={{ fontSize: "small" }} target="_blank">
        Slides
      </a>
    </AnchorHeader>

    {description ? <Markdown source={description} /> : "To be announced."}
  </div>
);
Talk.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  urls: PropTypes.shape({
    slides: PropTypes.string,
  }),
  type: PropTypes.oneOf(Object.keys(TYPES)),
  headerLevel: PropTypes.number,
};

export default Talk;
