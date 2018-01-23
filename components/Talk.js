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
      <span title={type}>{TYPES[type]}</span> {title || "To be announced."}
    </AnchorHeader>

    {description ? <Markdown source={description} /> : "To be announced."}
  </div>
);

export default Talk;
