import React from "react";
import PropTypes from "prop-types";
import { slugify } from "utils";

const PrefixedSessionLink = prefix => {
  const SessionLink = ({ title }) => (
    <a href={`/${prefix}/#${slugify(title)}`}>
      <span role="img" aria-label="Technologist">
        👩‍💻
      </span>
      {title}
    </a>
  );
  SessionLink.propTypes = {
    title: PropTypes.string,
  };

  return SessionLink;
};

export default PrefixedSessionLink;
