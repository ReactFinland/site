import React from "react";
import PropTypes from "prop-types";
import { AnchorHeader, Markdown, SessionSpeakers } from "components";

const Workshop = ({
  speakers,
  title,
  description,
  location,
  headerLevel = 2,
}) => (
  <div className="workshop">
    <AnchorHeader level={headerLevel}>
      {title || "To be announced."}
    </AnchorHeader>

    <SessionSpeakers speakers={speakers} />

    {description ? (
      <Markdown source={description} />
    ) : (
      <div>To be announced.</div>
    )}

    <AnchorHeader level={headerLevel + 1}>Location</AnchorHeader>

    <div>
      {location.name} - {location.address}, {location.city}
    </div>
  </div>
);
Workshop.propTypes = {
  speakers: PropTypes.array,
  title: PropTypes.string,
  description: PropTypes.string,
  headerLevel: PropTypes.number,
  location: PropTypes.object,
};

export default Workshop;
