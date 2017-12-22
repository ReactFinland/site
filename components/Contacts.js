import React from "react";
import Contact from "./Contact";

const Contacts = ({ items, ...props }) => (
  <div {...props}>
    {items.map(contact => <Contact {...contact} key={contact.name} />)}
  </div>
);

export default Contacts;
