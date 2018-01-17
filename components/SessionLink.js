import React from "react";
import AnchorHeader from "./AnchorHeader";
import Contacts from "./Contacts";
import Markdown from "./Markdown";
import slugify from "./slugify";

const SessionLink = prefix => ({ speakers, title, description }) => (
  <div className="content-block">
    <a className="speaker-name" href={`/${prefix}/#${slugify(title)}`}>
      {title}
    </a>
  </div>
);

export default SessionLink;
