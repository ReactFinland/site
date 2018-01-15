import React from "react";
import { content } from "@react-finland/content-2018";
import { Contacts, Session } from "../components";
import description from "./description";

const WorkshopIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full" id="schedule">
      <Contacts items={content.workshops} render={Session} />
    </div>
  </div>
);
WorkshopIndex.description = description;

export default WorkshopIndex;
