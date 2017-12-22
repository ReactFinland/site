import React from "react";
import Contact from "./Contact";

const Contacts = ({ items, render, ...props }) => (
  <div {...props}>
    {items.map((contact, key) =>
      React.createElement(render || Contact, { ...contact, key })
    )}
  </div>
);

export default Contacts;
