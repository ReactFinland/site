import React from "react";
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
          alt={about}
          key={i}
          width={32}
          height={32}
          src={require(`@react-finland/content-2018/images/${image}`)}
        />
        {name}
      </a>,
    ])}
  </span>
);

export default SessionSpeakers;
