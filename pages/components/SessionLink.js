import React from "react";
import AnchorHeader from "./AnchorHeader";
import Contacts from "./Contacts";
import Markdown from "./Markdown";
import slugify from "./slugify";

const SessionLink = prefix => ({ speakers, title }) => (
  <a href={`/${prefix}/#${slugify(title)}`}>👩‍💻{title}</a>
);

export default SessionLink;
