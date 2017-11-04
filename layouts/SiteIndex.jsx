import React from "react";
import SocialLinks from "../components/SocialLinks";

const ContentBlock = ({ name, type = "json" }) => (
  <div
    className="content-block"
    dangerouslySetInnerHTML={{
      __html: require(`../content/${name}.${type}`).body,
    }}
  />
);

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
        <div className="post__block post__schedule">
          <ContentBlock name="schedule" type="md" />
          <h2>Workshops</h2>
          <ContentBlock name="workshops/andrey-okonetchnikov" />
          <ContentBlock name="workshops/artem-sapegin" />
          <ContentBlock name="workshops/juho-vepsalainen" />
          <ContentBlock name="workshops/michel-weststrate" />
          <ContentBlock name="workshops/sven-sauleau" />

          <h2>Lightning Talks</h2>
          <ContentBlock name="lightning-talks/varya-stepanova" />
        </div>
        <div className="post__block post__speakers">
          <h2>Keynotes</h2>
          <ContentBlock name="keynotes/jani-evakallio" />
          <ContentBlock name="keynotes/ken-wheeler" />

          <h2>Presentations</h2>
          <ContentBlock name="presentations/christian-alfoni" />
          <ContentBlock name="presentations/david-khourshid" />
          <ContentBlock name="presentations/gant-laborde" />
          <ContentBlock name="presentations/kasia-jastrzebska" />
          <ContentBlock name="presentations/nik-graf" />
          <ContentBlock name="presentations/patrick-stapfer" />
          <ContentBlock name="presentations/rotem-mizrachi-meidan" />
          <ContentBlock name="presentations/sara-vieira" />
          <ContentBlock name="presentations/shay-keinan" />
          <ContentBlock name="presentations/sia-karamalegos" />
        </div>
        <div className="post__block post__block__full post__social">
          <SocialLinks />
        </div>
        <div className="post__block post__organization">
          <h2>About the Organization</h2>
          <ContentBlock name="about-organization" type="md" />
        </div>
        <div className="post__block post__organizers">
          <h2>Organizers</h2>
          <ContentBlock name="organizers" type="md" />
        </div>
      </section>
    </div>
  </div>
);
SiteIndex.description =
  "React Finland is a conference that comes with a workshop day and two days of presentations.";

export default SiteIndex;
