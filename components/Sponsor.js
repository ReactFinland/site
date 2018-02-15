import React from "react";

const SponsorContent = ({ about, image, name, props }) => (
  <img
    alt={name}
    className="sponsors--logo"
    src={require(`@react-finland/content-2018/images/${image}`)}
    {...props}
  />
);

const Sponsor = ({ name, about, social, image, logoProps }) => (
  <figure className="sponsors--item">
    <a href={social.homepage} title={`${name} — ${about}`}>
      <SponsorContent
        about={about}
        image={image}
        name={name}
        props={logoProps}
      />
    </a>
  </figure>
);

export default Sponsor;
