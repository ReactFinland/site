import React from "react";
import Markdown from "./Markdown";
import Keywords from "./Keywords";

const Partner = ({ name, about, social, image }) => (
  <a href={social.homepage} title={about} className="partner">
    <img
      className="partner-logo"
      src={require(`@react-finland/content-2018/images/${image}`)}
      width={100}
    />
    <span className="partner-name">{name}</span>
  </a>
);

export default Partner;
