import React from "react";
import values from "object.values";
import { Navigation } from "@survivejs/components";
import { organizers, partners } from "@react-finland/content-2018";
import navigationPages from "./navigation-pages";
import {
  AnchorHeader,
  Contacts,
  Markdown,
  Partner,
  SocialLinks,
} from "../components";

import "../styles/fontello-codes.css";
import "../styles/fontello-embedded.css";
import "normalize.css/normalize.css";
import "../styles/style.less";

const Header = () => (
  <header>
    <div className="header-container container">
      <div className="logo">
        <img
          src={require("assets/img/logo.png")}
          width={200}
          height={200}
          alt="React Finland logo"
        />
      </div>
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
            <Markdown source={require("../content/about-organization.md")} />
          </div>
          <div className="post-block" id="organizers">
            <AnchorHeader level={2}>Organizers</AnchorHeader>
            <Contacts className="organizers" items={values(organizers)} />
          </div>
          <div className="post-block post-block-full">
            <AnchorHeader level={2}>Partners</AnchorHeader>
            <Contacts
              className="partners"
              items={values(partners)}
              render={Partner}
            />
          </div>
        </section>
      </div>
    </section>

    <Navigation pathname={pathname} pages={navigationPages} />
  </main>
);

export default SiteBody;
