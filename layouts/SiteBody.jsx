import React from "react";
import values from "object.values";
import { Navigation } from "@survivejs/components";
import { content } from "@react-finland/content-2018";
import navigationPages from "./navigation-pages";
import {
  AnchorHeader,
  Contacts,
  ContactMini,
  Markdown,
  SocialLinks,
} from "../components";

import "normalize.css/normalize.css";
import "../styles/fontello-codes.css";
import "../styles/fontello-embedded.css";
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
      <div className="buy">
        <a href="https://ti.to/react-finland/2018" className="buy-button">
          Buy tickets now!
        </a>
      </div>
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
          <div className="post-block post-block-full">
            <AnchorHeader level={2}>Partners</AnchorHeader>
            <Contacts
              className="partners"
              items={values(content.partners)}
              render={ContactMini}
            />
          </div>
        </section>
      </div>
    </section>

    <Navigation pathname={pathname} pages={navigationPages} />
  </main>
);

export default SiteBody;
