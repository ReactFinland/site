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

const Header = () => (
  <header>
    <div className="container">
      <div className="rubric">
        <span>React </span>
        <span className="text-rf-blue">Finland</span>
      </div>
      <h1>One workshop day + two days of presentations</h1>
      <h3>Your chance to learn more about React up north</h3>
    </div>
  </header>
);

const SiteIndex = ({ section }) => (
  <section className="frontpage">
    <Header />
    <div className="container">
      <section className="post-block-wrap">
        <div className="post-block post-block-full" id="social">
          <SocialLinks />
        </div>
        <div className="post-block" id="schedule">
          <ContentBlock name="schedule" type="md" />
          <h2>Workshops</h2>
          <ContentBlock name="workshops/andrey-okonetchnikov" />
          <ContentBlock name="workshops/artem-sapegin" />
          <ContentBlock name="workshops/juho-vepsalainen" />
          <ContentBlock name="workshops/michel-weststrate" />
          <ContentBlock name="workshops/sven-sauleau" />
        </div>
        <div className="post-block" id="speakers">
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

          <h2>Lightning Talks</h2>
          <ContentBlock name="lightning-talks/varya-stepanova" />
        </div>
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
);
SiteIndex.description =
  "React Finland is a conference that comes with a workshop day and two days of presentations.";

export default SiteIndex;
