import React from "react";
import { content } from "@react-finland/content-2018";
import { Contacts, Workshop } from "../components";

const WorkshopIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full" id="schedule">
      <Contacts items={content.workshops} render={Workshop} />
    </div>
  </div>
);

export default WorkshopIndex;
