import React from "react";
import ReactCountryFlag from "react-country-flag";
import Markdown from "./Markdown";
import AnchorHeader from "./AnchorHeader";
import Keywords from "./Keywords";

const Contact = ({
  name,
  image,
  social,
  location,
  about,
  keywords,
  headerLevel = 2,
  children,
}) => (
  <figure className="contact" key={name}>
    <div className="contact--meta">
      <AnchorHeader
        level={headerLevel}
        anchor={name}
        className="contact--header"
      >
        {name}

        <span className="country">
          <ReactCountryFlag code={location.country.code} svg />
        </span>
      </AnchorHeader>

      <div className="social">
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
      </div>
    </div>

    <div className="content">
      <img
        className="photo"
        alt={about}
        width={100}
        height={100}
        src={require(`@react-finland/content-2018/images/${image}`)}
      />
      {about ? <Markdown className="about" source={about} /> : "No bio yet."}
    </div>

    {keywords && <Keywords items={keywords} />}

    {children}
  </figure>
);

export default Contact;
