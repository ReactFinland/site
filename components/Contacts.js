import React from "react";
import Contact from "./Contact";

const Contacts = ({ items, render, renderProps = {}, ...props }) => (
  <div {...props}>
    {items.map((contact, key) =>
      React.createElement(render || Contact, {
        ...contact,
        ...renderProps,
        key,
      })
    )}
  </div>
);

export default Contacts;
