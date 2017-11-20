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

const WorkshopIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block" id="schedule">
      <ContentBlock name="workshops/andrey-and-artem" />
      <ContentBlock name="presentations/david-khourshid" />
      <ContentBlock name="workshops/juho-vepsalainen" />
      <ContentBlock name="workshops/michel-weststrate" />
    </div>
    <div className="post-block" id="schedule2">
      <ContentBlock name="presentations/rotem-mizrachi-meidan" />
      <ContentBlock name="workshops/sara-vieira" />
      <ContentBlock name="presentations/sia-karamalegos" />
      <ContentBlock name="workshops/sven-sauleau" />
    </div>
  </div>
);
WorkshopIndex.description =
  "React Finland is a conference that comes with a workshop day and two days of presentations.";

export default WorkshopIndex;
