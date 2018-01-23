import React, { Fragment } from "react";
import Contact from "./Contact";

const Contacts = ({ items, render, renderProps = {} }) => (
  <Fragment>
    {items.map((contact, key) =>
      React.createElement(render || Contact, {
        ...contact,
        ...renderProps,
        key,
      })
    )}
  </Fragment>
);

export default Contacts;
