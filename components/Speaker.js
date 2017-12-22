import React from "react";
import Markdown from "./Markdown";
import AnchorHeader from "./AnchorHeader";
import Keywords from "./Keywords";

const Speaker = ({
  name,
  photo,
  homepage,
  github,
  twitter,
  linkedin,
  about,
  keywords,
}) => (
  <div className="speaker-meta" key={name}>
    <img
      className="author-photo"
      width={100}
      height={100}
      src={require(`@react-finland/content-2018/images/${photo}`)}
    />

    <AnchorHeader level={3} anchor={name}>
      {name}

      {homepage && (
        <a href={homepage}>
          <i className="icon-home" />
        </a>
      )}

      {github && (
        <a href={`https://github.com/${github}`}>
          <i className="icon-github-circled" />
        </a>
      )}

      {twitter && (
        <a href={`https://twitter.com/${twitter}`}>
          <i className="icon-twitter" />
        </a>
      )}

      {linkedin && (
        <a href={`https://www.linkedin.com/in/${linkedin}`}>
          <i className="icon-linkedin-squared" />
        </a>
      )}
    </AnchorHeader>

    {about ? <Markdown source={about} /> : "No bio yet."}

    {keywords && <Keywords items={keywords} />}
  </div>
);

export default Speaker;
