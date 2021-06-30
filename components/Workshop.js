import React from "react";
import PropTypes from "prop-types";
import { AnchorHeader, Markdown, SessionSpeakers } from "components";

const Workshop = ({
  speakers,
  day,
  begin,
  end,
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

    {day && begin && end && (
      <div>
        {day}, <span x={`offsetByTimezone("${begin}")`}></span>-
        <span x={`offsetByTimezone("${end}")`}></span>
      </div>
    )}

    {description ? (
      <Markdown source={description} />
    ) : (
      <div>To be announced.</div>
    )}

    {location && (
      <>
        <AnchorHeader level={headerLevel + 1}>Location</AnchorHeader>
        <div>
          {location.name}{" "}
          {location.address ? `- ${location.address},${location.city}` : null}
        </div>
      </>
    )}
  </div>
);
Workshop.propTypes = {
  speakers: PropTypes.array,
  title: PropTypes.string,
  day: PropTypes.string,
  begin: PropTypes.string,
  end: PropTypes.string,
  description: PropTypes.string,
  headerLevel: PropTypes.number,
  location: PropTypes.object,
};

export default Workshop;
