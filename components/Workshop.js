import React from "react";
import PropTypes from "prop-types";
import { AnchorHeader, Markdown, SessionSpeakers } from "components";

const Workshop = ({ speakers, title, description, headerLevel = 2 }) => (
  <div className="workshop">
    <AnchorHeader level={headerLevel}>
      {title || "To be announced."}
    </AnchorHeader>

    <SessionSpeakers speakers={speakers} />

    {description ? <Markdown source={description} /> : "To be announced."}
  </div>
);
Workshop.propTypes = {
  speakers: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  headerLevel: PropTypes.number,
};

export default Workshop;
