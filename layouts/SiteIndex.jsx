import React from "react";
import SocialLinks from "../components/SocialLinks";

const SiteIndex = ({ section }) => (
  <div className="frontpage">
    <div className="front__heading">
      <div className="front-heading-content-wrapper">
        <div className="front-header-wrapper">
          <div className="front-name">
            <span className="first">React </span>
            <span className="second">Finland</span>
          </div>

          <h1 className="front-header">
            One workshop day + two days of presentations
          </h1>
          <h3 className="front-motto">
            Your chance to learn more about React up north
          </h3>
        </div>
      </div>
    </div>

    <div className="post post--front">
      <section className="post__content">
        <div dangerouslySetInnerHTML={{ __html: require("./index.md").body }} />

        <SocialLinks />
      </section>
    </div>
  </div>
);
SiteIndex.description =
  "React Finland is a conference that comes with a workshop day and two days of presentations.";

export default SiteIndex;
