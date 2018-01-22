import React from "react";
import AnchorHeader from "./AnchorHeader";
import Contacts from "./Contacts";
import Markdown from "./Markdown";

const Workshop = ({ speakers, title, description, headerLevel = 2 }) => (
  <div className="content-block">
    <AnchorHeader level={headerLevel}>
      {title || "To be announced."}
    </AnchorHeader>

    {description ? <Markdown source={description} /> : "To be announced."}

    <Contacts
      className="speakers"
      items={speakers}
      renderProps={{ headerLevel: headerLevel + 1 }}
    />
  </div>
);

export default Workshop;
