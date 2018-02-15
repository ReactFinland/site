import React from "react";
import PropTypes from "prop-types";
import { slugify } from "utils";

const PrefixedSessionLink = prefix => {
  const SessionLink = ({ title }) => (
    <a href={`/${prefix}/#${slugify(title)}`}>👩‍💻{title}</a>
  );
  SessionLink.propTypes = {
    title: PropTypes.string,
  };

  return SessionLink;
};

export default PrefixedSessionLink;
