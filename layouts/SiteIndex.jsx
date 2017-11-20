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
    <div className="post-block-full" id="schedule">
      <ContentBlock name="schedule" type="md" />
    </div>
  </div>
);
SiteIndex.description =
  "React Finland is a conference that comes with a workshop day and two days of presentations.";

export default SiteIndex;
