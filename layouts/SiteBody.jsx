import React from "react";

import { Navigation } from "@survivejs/components";

import "../styles/fontello-codes.css";
import "../styles/fontello-embedded.css";
import "normalize.css/normalize.css";
import "../styles/style.less";

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
    title: "Follow @ReactFinland",
    url: "https://twitter.com/ReactFinland",
  },
  {
    title: "Read the blog",
    url: "https://medium.com/react-finland",
  },
];

const SiteBody = ({ children, section, location: { pathname } }) => (
  <main>
    {children}
    <Navigation pages={navigationPages(section.name)} />
  </main>
);

export default SiteBody;
