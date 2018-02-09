import React, { Fragment } from "react";
import { content } from "@react-finland/content-2018";
import { AnchorHeader, Contacts, Markdown } from "components";

const page = content.pages.find(({ id }) => id === "for-sponsors");

const SponsorIndex = ({ section }) => (
  <Fragment>
    <section className="intro intro_sponsors">
      <div className="intro--main">
        <Markdown source={page.intro} />
      </div>
      <aside className="intro--aside" />
    </section>
    <div className="grid--5col">
      <Markdown source={page.main} />
    </div>
  </Fragment>
);

export default SponsorIndex;
