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
  <figcaption key="name" className="contact-mini-name">
    {name}
  </figcaption>,
];

const ContactMini = ({ name, about, social, image }) => (
  <figure className="contact-mini">
    {resolveSocialLink(social) ? (
      <a href={resolveSocialLink(social)} title={about}>
        <ContactMiniContent image={image} name={name} />
      </a>
    ) : (
      <ContactMiniContent image={image} name={name} />
    )}
  </figure>
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
