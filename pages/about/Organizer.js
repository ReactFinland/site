import React from "react";
import ReactCountryFlag from "react-country-flag";
import { AnchorHeader, Keywords, Markdown } from "../components";

const Organizer = ({ name, image, about }) => (
  <figure className="organizer" key={name}>
    <img
      alt={about}
      className="organizer--photo"
      width={100}
      height={100}
      src={require(`@react-finland/content-2018/images/${image}`)}
    />

    <figcaption className="organizer--name">{name}</figcaption>
  </figure>
);

export default Organizer;
