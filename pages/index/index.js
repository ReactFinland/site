import React, { Fragment } from "react";
import { content } from "@react-finland/content-2018";
import { AnchorHeader, Contacts, Markdown } from "components";
import ContactMini from "./ContactMini";

const page = content.pages.find(({ id }) => id === "index");

const SiteIndex = ({ section }) => (
  <Fragment>
    <section className="intro intro_home">
      <div className="intro--main">
        <Markdown source={page.intro} />
      </div>
      <aside className="intro--aside">
        <Markdown source={page.secondary} />
      </aside>
    </section>
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
