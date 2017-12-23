import React from "react";
import Markdown from "./Markdown";
import Keywords from "./Keywords";

const ContactMini = ({ name, about, social, image }) => (
  <a href={social.homepage} title={about} className="contact-mini">
    <img
      className="contact-mini-logo"
      src={require(`@react-finland/content-2018/images/${image}`)}
      width={100}
    />
    <span className="contact-mini-name">{name}</span>
  </a>
);

export default ContactMini;
