import React from "react";
import { content } from "@react-finland/content-2018";
import { Contacts, Workshop } from "../components";
import description from "./description";

const WorkshopIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full" id="schedule">
      <Contacts items={content.workshops} render={Workshop} />
    </div>
  </div>
);
WorkshopIndex.description = description;
WorkshopIndex.title = "Workshops";

export default WorkshopIndex;
