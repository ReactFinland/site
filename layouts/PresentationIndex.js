import React from "react";
import ContentBlock from "../components/ContentBlock";
import SocialLinks from "../components/SocialLinks";

const PresentationIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block post-block-full" id="schedule">
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
  </div>
);
PresentationIndex.description =
  "React Finland is a conference that comes with a workshop day and two days of presentations.";

export default PresentationIndex;
