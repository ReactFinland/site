import React from "react";
import { slugify } from "../components";

const SessionLink = prefix => ({ speakers, title }) => (
  <a href={`/${prefix}/#${slugify(title)}`}>👩‍💻{title}</a>
);

export default SessionLink;
