import React from "react";
import AnchorHeader from "./AnchorHeader";
import Markdown from "./Markdown";

const TYPES = {
  keynote: "🗝",
  lightningTalk: "⚡️",
  presentation: "🎙",
};

const Talk = ({ speakers, title, description, type, headerLevel = 2 }) => (
  <div className="content-block">
    <AnchorHeader level={headerLevel}>
      {title || "To be announced."} {TYPES[type]}
    </AnchorHeader>

    {description ? <Markdown source={description} /> : "To be announced."}
  </div>
);

export default Talk;
