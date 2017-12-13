import React from "react";
import Markdown from "./Markdown";
import AnchorHeader from "./AnchorHeader";

const Speaker = ({ speaker: { speakers, session } }) => (
  <div className="content-block">
    <AnchorHeader level={3}>
      {speakers.map(speaker => speaker.name).join(" and ")} -{" "}
      {session.title || "To be announced."}
    </AnchorHeader>

    {session.description ? (
      <Markdown source={session.description} />
    ) : (
      "To be announced."
    )}

    {speakers.map(speaker => (
      <div className="speaker-meta" key={speaker.name}>
        <img
          className="author-photo"
          width={100}
          height={100}
          src={require(`@react-finland/content-2018/images/speakers/${
            speaker.photo
          }`)}
        />

        <b>About {speaker.name.split(" ")[0]}</b>

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

        {speaker.about ? <Markdown source={speaker.about} /> : "No bio yet."}
      </div>
    ))}
  </div>
);

export default Speaker;
