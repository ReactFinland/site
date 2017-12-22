import React from "react";
import values from "object.values";
import Partner from "./Partner";

const Partners = ({ items }) => (
  <div className="partners">
    {values(items).map(partner => <Partner {...partner} key={partner.name} />)}
  </div>
);

export default Partners;
