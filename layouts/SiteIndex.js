import React from "react";
import { content } from "@react-finland/content-2018";
import { AnchorHeader, Contacts, ContactMini, Markdown } from "../components";
import description from "./description";

const SiteIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block-full" id="schedule">
      <Markdown source={require("../content/intro.md")} />

      <AnchorHeader level={2}>Speakers</AnchorHeader>
      <Contacts
        className="speakers-mini"
        items={content.speakers}
        render={ContactMini}
      />

      <AnchorHeader level={2}>Tickets</AnchorHeader>
      <tito-widget event="react-finland/2018" />
    </div>
  </div>
);
SiteIndex.description = description;

export default SiteIndex;
