import React from "react";
import { content } from "@react-finland/content-2018";
import { Contacts } from "components";
import Workshop from "./Workshop";

const WorkshopIndex = ({ section }) => (
  <div className="grid grid--5col">
    <Contacts items={content.workshops} render={Workshop} />
  </div>
);

export default WorkshopIndex;
