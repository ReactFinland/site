import React from "react";
import values from "object.values";
import { content } from "@react-finland/content-2018";
import { AnchorHeader, Contacts, Markdown } from "../components";
import description from "./description";

const OrganizerIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full">
      <AnchorHeader level={2}>About Organization</AnchorHeader>
      <Markdown source={require("../content/about-organization.md")} />

      <AnchorHeader level={2}>Organizers</AnchorHeader>
      <Contacts className="organizers" items={values(content.organizers)} />
    </div>
  </div>
);
OrganizerIndex.description = description;

export default OrganizerIndex;
