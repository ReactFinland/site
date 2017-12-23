import React from "react";
import values from "object.values";
import { content } from "@react-finland/content-2018";
import { Contacts, Session } from "../components";

const WorkshopIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full" id="schedule">
      <Contacts items={values(content.workshops)} render={Session} />
    </div>
  </div>
);
WorkshopIndex.description =
  "React Finland is a conference that comes with a workshop day and two days of presentations.";

export default WorkshopIndex;
