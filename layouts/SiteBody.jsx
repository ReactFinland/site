import React from "react";

import { Navigation } from "@survivejs/components";

import "../styles/custom.scss";
import "../styles/prism.css";
import "../styles/fontello-codes.css";
import "../styles/fontello-embedded.css";

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
