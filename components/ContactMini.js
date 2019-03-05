import React from "react";
import PropTypes from "prop-types";
import { slugify } from "../utils";

const ContactMiniContent = ({ image, name }) => [
  <img
    key="image"
    alt="about"
    className="contact-mini-logo photo"
    src={image.url}
    width={100}
  />,
  <figcaption key="name" className="contact-mini-name">
    {name}
  </figcaption>,
];
ContactMiniContent.propTypes = {
  image: PropTypes.object,
  name: PropTypes.string,
};

const ContactMini = ({ name, about, image }) => (
  <figure className="contact-mini">
    <a href={`/speakers/#${slugify(name)}`} title={about}>
      <ContactMiniContent about={about} image={image} name={name} />
    </a>
  </figure>
);
ContactMini.propTypes = {
  name: PropTypes.string,
  about: PropTypes.string,
  image: PropTypes.object,
};

export default ContactMini;
