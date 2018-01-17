import React from "react";
import { Link as RRLink } from "react-router-dom";

const Link = ({ to, children, ...props }) =>
  /^https?:\/\//.test(to) ? (
    <a href={to} {...props}>
      {children}
    </a>
  ) : (
    <RRLink to={to} {...props}>
      {children}
    </RRLink>
  );

export default Link;
