import React from "react";
import ReactMarkdown from "react-markdown";

const Speaker = ({ speaker: { speakers, session } }) => (
  <div className="content-block">
    <h3 className="header">
      {speakers.map(speaker => speaker.name).join(" and ")} -{" "}
      {session.title || "To be announced."}
    </h3>

    {session.description ? (
      <ReactMarkdown source={session.description} />
    ) : (
      "To be announced."
    )}

    {speakers.map(speaker => (
      <div className="speaker-meta" key={speaker.name}>
        <img
          className="author-photo"
          width={100}
          height={100}
          src={require(`assets/img/speakers/${speaker.photo}`)}
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

        {speaker.about ? (
          <ReactMarkdown source={speaker.about} />
        ) : (
          "No bio yet."
        )}
      </div>
    ))}
  </div>
);

export default Speaker;
