import React from "react";
import Markdown from "./Markdown";
import AnchorHeader from "./AnchorHeader";
import Keywords from "./Keywords";

const Speaker = ({ name, image, social, about, keywords }) => (
  <div className="speaker-meta" key={name}>
    <img
      className="author-photo"
      width={100}
      height={100}
      src={require(`@react-finland/content-2018/images/${image}`)}
    />

    <AnchorHeader level={3} anchor={name}>
      {name}

      {social.homepage && (
        <a href={social.homepage}>
          <i className="icon-home" />
        </a>
      )}

      {social.github && (
        <a href={`https://github.com/${social.github}`}>
          <i className="icon-github-circled" />
        </a>
      )}

      {social.twitter && (
        <a href={`https://twitter.com/${social.twitter}`}>
          <i className="icon-twitter" />
        </a>
      )}

      {social.linkedin && (
        <a href={`https://www.linkedin.com/in/${social.linkedin}`}>
          <i className="icon-linkedin-squared" />
        </a>
      )}
    </AnchorHeader>

    {about ? <Markdown source={about} /> : "No bio yet."}

    {keywords && <Keywords items={keywords} />}
  </div>
);

export default Speaker;
