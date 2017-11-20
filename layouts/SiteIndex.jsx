import React from "react";

const ContentBlock = ({ name, type = "json" }) => (
  <div
    className="content-block"
    dangerouslySetInnerHTML={{
      __html: require(`../content/${name}.${type}`).body,
    }}
  />
);

const SiteIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block" id="schedule">
      <ContentBlock name="schedule" type="md" />

      <h2>Lightning Talks</h2>
      <ContentBlock name="lightning-talks/varya-stepanova" />
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
    </div>
  </div>
);
SiteIndex.description =
  "React Finland is a conference that comes with a workshop day and two days of presentations.";

export default SiteIndex;
