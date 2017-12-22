import React from "react";
import Partner from "./Partner";

const Partners = ({ items }) => (
  <div className="partners">
    {items.map(partner => <Partner {...partner} key={partner.name} />)}
  </div>
);

export default Partners;
