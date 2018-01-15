import React from "react";
import Markdown from "./Markdown";
import Keywords from "./Keywords";

const ContactMiniContent = ({ image, name }) => [
  <img
    key="image"
    className="contact-mini-logo photo"
    src={require(`@react-finland/content-2018/images/${image}`)}
    width={100}
  />,
  <span key="name" className="contact-mini-name">
    {name}
  </span>,
];

const ContactMini = ({ name, about, social, image }) =>
  resolveSocialLink(social) ? (
    <a href={resolveSocialLink(social)} title={about} className="contact-mini">
      <ContactMiniContent image={image} name={name} />
    </a>
  ) : (
    <div className="contact-mini">
      <ContactMiniContent image={image} name={name} />
    </div>
  );

function resolveSocialLink(social) {
  if (social.homepage) {
    return social.homepage;
  }

  if (social.twitter) {
    return `https://twitter.com/${social.twitter}`;
  }
}

export default ContactMini;
