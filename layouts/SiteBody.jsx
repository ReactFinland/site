import React from "react";

import { Navigation } from "@survivejs/components";

import "../styles/fontello-codes.css";
import "../styles/fontello-embedded.css";
import "../styles/custom.scss";

const navigationPages = sectionName => [
  /*
  {
    title: "Home",
    url: "/"
  },
  {
    title: "",
    url: ""
  },
  */
  {
    title: "@ReactFinland",
    url: "https://twitter.com/ReactFinland",
  },
];

const SiteBody = ({ children, section, location: { pathname } }) => (
  <div>
    {children}

    <Navigation pages={navigationPages(section.name)} />
  </div>
);

export default SiteBody;
