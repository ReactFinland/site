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
  social.homepage ? (
    <a href={social.homepage} title={about} className="contact-mini">
      <ContactMiniContent image={image} name={name} />
    </a>
  ) : (
    <div className="contact-mini">
      <ContactMiniContent image={image} name={name} />
    </div>
  );

export default ContactMini;
