import React from "react";
import { Markdown } from "components";

const ContactMiniContent = ({ about, image, name }) => [
  <img
    key="image"
    alt="about"
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
        <ContactMiniContent about={about} image={image} name={name} />
      </a>
    ) : (
      <ContactMiniContent about={about} image={image} name={name} />
    )}
  </figure>
);

function resolveSocialLink(social) {
  return social.homepage || social.twitter;
}

export default ContactMini;
