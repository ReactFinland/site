import React, { Fragment } from "react";
import { content } from "@react-finland/content-2018";
import { AnchorHeader, Contacts, Markdown, Organizer } from "../components";

const PrivacyPolicy = ({ section }) => (
  <Fragment>
    <section className="intro intro_about">
      <div className="intro--main">
        <Markdown source={require("./privacy.md")} />
      </div>
    </section>
  </Fragment>
);

export default PrivacyPolicy;
