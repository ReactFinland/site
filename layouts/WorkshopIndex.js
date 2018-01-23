import React from "react";
import { content } from "@react-finland/content-2018";
import { Contacts, Workshop } from "../components";

const WorkshopIndex = ({ section }) => (
  <div className="grid grid--5col">
    <Contacts items={content.workshops} render={Workshop} />
  </div>
);

export default WorkshopIndex;
