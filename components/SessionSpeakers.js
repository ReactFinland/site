import React from "react";
import PropTypes from "prop-types";
import { slugify } from "../utils";

const SessionSpeakers = ({ speakers = [] }) => (
  <span className="session--speakers">
    {speakers.map(({ name, image, about }, i) => [
      speakers.length > 1 &&
        i === speakers.length - 1 && <span key={`and-${i}`}> and </span>,
      <a
        key={`name-${i}`}
        className="speaker-name"
        href={`/speakers/#${slugify(name)}`}
      >
        <img
          className="speaker-name--photo photo"
          alt={about || name}
          key={i}
          width={32}
          height={32}
          src={image.url}
        />
        {name}
      </a>,
    ])}
  </span>
);
SessionSpeakers.propTypes = {
  speakers: PropTypes.array,
};

export default SessionSpeakers;
