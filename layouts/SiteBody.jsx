import React from "react";
import { ContentBlock, SocialLinks } from "../components";
import { Navigation } from "@survivejs/components";

import "../styles/fontello-codes.css";
import "../styles/fontello-embedded.css";
import "normalize.css/normalize.css";
import "../styles/style.less";

const Header = () => (
  <header>
    <div className="container">
      <div className="rubric">
        <span>React </span>
        <span className="text-rf-blue">Finland</span>
      </div>
      <h1>One workshop day + two days of presentations</h1>
      <h3>
        Your chance to learn more about React up north - Helsinki (24-26.4.2018)
      </h3>
    </div>
  </header>
);

const navigationPages = pathname => [
  {
    title: "Follow @ReactFinland",
    url: "https://twitter.com/ReactFinland",
  },
  {
    title: "Schedule",
    url: "/",
  },
  {
    title: "Presentations",
    url: "/presentations/",
  },
  {
    title: "Workshops",
    url: "/workshops/",
  },
  {
    title: "Read the blog",
    url: "https://medium.com/react-finland",
  },
];

const SiteBody = ({ children, section, location: { pathname } }) => (
  <main>
    <section className="frontpage">
      <Header />
      <div className="container">
        <section className="post-block-wrap">
          <div className="post-block post-block-full" id="social">
            <SocialLinks />
          </div>
          {children}
          <div className="post-block post-block-full" id="social2">
            <SocialLinks />
          </div>
          <div className="post-block" id="organization">
            <h2>About the Organization</h2>
            <ContentBlock name="about-organization" type="md" />
          </div>
          <div className="post-block" id="organizers">
            <h2>Organizers</h2>
            <ContentBlock name="organizers" type="md" />
          </div>
        </section>
      </div>
    </section>

    <Navigation pathname={pathname} pages={navigationPages(pathname)} />
  </main>
);

export default SiteBody;
