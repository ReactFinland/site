import React from "react";
import {
  AnchorHeader,
  ContentBlock,
  Partners,
  SocialLinks,
} from "../components";
import { Navigation } from "@survivejs/components";

import "../styles/fontello-codes.css";
import "../styles/fontello-embedded.css";
import "normalize.css/normalize.css";
import "../styles/style.less";

const Header = () => (
  <header>
    <div className="header-container container">
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
    title: "Speakers",
    url: "/speakers/",
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
      <div className="main-container container">
        <section className="post-block-wrap">
          <div className="post-block post-block-full" id="social">
            <SocialLinks />
          </div>
          {children}
          <div className="post-block post-block-full" id="social2">
            <SocialLinks />
          </div>
          <div className="post-block" id="organization">
            <AnchorHeader level={2}>About the Organization</AnchorHeader>
            <ContentBlock name="about-organization" type="md" />
          </div>
          <div className="post-block" id="organizers">
            <AnchorHeader level={2}>Organizers</AnchorHeader>
            <ContentBlock name="organizers" type="md" />
          </div>
          <div className="post-block post-block-full">
            <Partners />
          </div>
        </section>
      </div>
    </section>

    <Navigation pathname={pathname} pages={navigationPages(pathname)} />
  </main>
);

export default SiteBody;
