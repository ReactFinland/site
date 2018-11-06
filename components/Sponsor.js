import React from "react";
import PropTypes from "prop-types";

const SponsorContent = ({ image, name, props }) => (
  <img alt={name} className="sponsors--logo" src={image.url} {...props} />
);
SponsorContent.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string,
  props: PropTypes.object,
};

const Sponsor = ({ name, about, social, image, logoProps }) => (
  <figure className="sponsors--item">
    <a href={social.homepage} title={`${name} — ${about}`}>
      <SponsorContent image={image} name={name} props={logoProps} />
    </a>
  </figure>
);
Sponsor.propTypes = {
  name: PropTypes.string,
  about: PropTypes.string,
  social: PropTypes.object,
  image: PropTypes.object,
  logoProps: PropTypes.object,
};

export default Sponsor;
