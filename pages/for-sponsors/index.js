import React, { Fragment } from "react";
import { AnchorHeader, Contacts, Markdown } from "../components";

const SponsorIndex = ({ section }) => (
  <Fragment>
    <section className="intro intro_sponsors">
      <div className="intro--main">
        <Markdown source={require("./intro.md")} />
      </div>
      <aside className="intro--aside" />
    </section>
    <div className="grid--5col">
      <Markdown source={require("./content.md")} />
    </div>
  </Fragment>
);

export default SponsorIndex;
