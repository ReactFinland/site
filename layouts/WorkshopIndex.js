import React from "react";
import values from "object.values";
import { workshops } from "@react-finland/content-2018";
import { Sessions } from "../components";

const WorkshopIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full" id="schedule">
      <Sessions items={values(workshops)} />
    </div>
  </div>
);
WorkshopIndex.description =
  "React Finland is a conference that comes with a workshop day and two days of presentations.";

export default WorkshopIndex;
