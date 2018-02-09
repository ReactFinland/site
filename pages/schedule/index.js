import React, { Fragment } from "react";
import { content } from "@react-finland/content-2018";
import { Markdown } from "components";

const page = content.pages.find(({ id }) => id === "schedule");

const ScheduleIndex = ({ section }) => (
  <Fragment>
    <section className="intro intro_schedule">
      <div className="intro--main">
        <Markdown source={page.intro} />
      </div>
      <aside className="intro--aside" />
    </section>
    <div className="grid--5col" id="schedule">
      <Markdown source={page.main} />
    </div>
  </Fragment>
);

export default ScheduleIndex;
