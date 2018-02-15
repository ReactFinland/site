import React from "react";
import Contact from "./Contact";

const Contacts = ({ items = [], render, renderProps = {} }) => (
  <>
    {items.map((contact, key) =>
      React.createElement(render || Contact, {
        ...contact,
        ...renderProps,
        key,
      })
    )}
  </>
);

export default Contacts;
