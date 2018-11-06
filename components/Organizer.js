import React from "react";
import PropTypes from "prop-types";

const Organizer = ({ name, image, about }) => (
  <figure className="organizer" key={name}>
    <img
      alt={about}
      className="organizer--photo"
      width={100}
      height={100}
      src={image.url}
    />

    <figcaption className="organizer--name">{name}</figcaption>
  </figure>
);
Organizer.propTypes = {
  name: PropTypes.string,
  image: PropTypes.object,
  about: PropTypes.string,
};

export default Organizer;
