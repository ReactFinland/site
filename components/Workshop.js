import React from "react";
import AnchorHeader from "./AnchorHeader";
import Markdown from "./Markdown";
import SessionsSpeakers from "./SessionSpeakers";

const Workshop = ({ speakers, title, description, headerLevel = 2 }) => (
  <div className="workshop">
    <AnchorHeader level={headerLevel}>
      {title || "To be announced."}
    </AnchorHeader>

    <SessionsSpeakers speakers={speakers} />

    {description ? <Markdown source={description} /> : "To be announced."}
  </div>
);

export default Workshop;
