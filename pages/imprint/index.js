import React, { Fragment } from "react";
import { content } from "@react-finland/content-2018";
import { Markdown } from "components";

const page = content.pages.find(({ id }) => id === "imprint");

const Imprint = ({ section }) => (
  <Fragment>
    <section className="intro intro_about">
      <div className="intro--main">
        <Markdown source={page.main} />
      </div>
    </section>
  </Fragment>
);

export default Imprint;
