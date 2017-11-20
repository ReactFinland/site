import React from "react";

const ContentBlock = ({ name, type = "json" }) => (
  <div
    className="content-block"
    dangerouslySetInnerHTML={{
      __html: require(`../content/${name}.${type}`).body,
    }}
  />
);

export default ContentBlock;
