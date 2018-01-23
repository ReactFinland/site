import React from "react";
import Markdown from "./Markdown";
import Keywords from "./Keywords";

const SponsorContent = ({ about, image, name }) => (
  <img
    key="image"
    alt="about"
    className="sponsor--logo"
    src={require(`@react-finland/content-2018/images/${image}`)}
    width={100}
  />
);

const Sponsor = ({ name, about, social, image }) => (
  <figure className="sponsor">
    {resolveSocialLink(social) ? (
      <a href={resolveSocialLink(social)} title={about}>
        <SponsorContent about={about} image={image} name={name} />
      </a>
    ) : (
      <SponsorContent about={about} image={image} name={name} />
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

export default Sponsor;
