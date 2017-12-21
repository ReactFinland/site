import React from "react";

const ContentBlock = ({ name }) => (
  <div
    className="content-block"
    dangerouslySetInnerHTML={{
      __html: require(`../content/${name}.md`),
    }}
  />
);

export default ContentBlock;
