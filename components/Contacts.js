import React from "react";
import Contact from "./Contact";

const Contacts = ({ items, render, ...props }) => (
  <div {...props}>
    {items.map(contact =>
      React.createElement(render || Contact, { ...contact, key: contact.name })
    )}
  </div>
);

export default Contacts;
