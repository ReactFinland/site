import React, { Fragment } from "react";
import { content } from "@react-finland/content-2018";
import { AnchorHeader, Contacts, ContactMini, Markdown } from "../components";

const SiteIndex = ({ section }) => (
  <Fragment>
    <div className="grid--5col">
      <Markdown source={require("../content/intro.md")} />
    </div>
    <AnchorHeader level={2}>Speakers</AnchorHeader>
    <div className="grid--full speakers">
      <Contacts items={content.speakers} render={ContactMini} />
    </div>
    <AnchorHeader level={2}>Tickets</AnchorHeader>
    <div className="grid--full">
      <tito-widget event="react-finland/2018" />
    </div>
  </Fragment>
);

export default SiteIndex;
