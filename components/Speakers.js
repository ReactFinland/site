import React from "react";
import Markdown from "./Markdown";
import AnchorHeader from "./AnchorHeader";

const Speakers = ({ items }) => (
  <div className="speakers">
    {items.map(speaker => (
      <div className="speaker-meta" key={speaker.name}>
        <img
          className="author-photo"
          width={100}
          height={100}
          src={require(`@react-finland/content-2018/images/speakers/${
            speaker.photo
          }`)}
        />

        <AnchorHeader level={3} anchor={speaker.name}>
          {speaker.name}

          {speaker.homepage && (
            <a href={speaker.homepage}>
              <i className="icon-home" />
            </a>
          )}

          {speaker.github && (
            <a href={`https://github.com/${speaker.github}`}>
              <i className="icon-github-circled" />
            </a>
          )}

          {speaker.twitter && (
            <a href={`https://twitter.com/${speaker.twitter}`}>
              <i className="icon-twitter" />
            </a>
          )}
        </AnchorHeader>

        {speaker.about ? <Markdown source={speaker.about} /> : "No bio yet."}
      </div>
    ))}
  </div>
);

export default Speakers;
