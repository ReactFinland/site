import React, { Fragment } from "react";
import { Markdown } from "components";

const ScheduleIndex = ({ section }) => (
  <Fragment>
    <section className="intro intro_schedule">
      <div className="intro--main">
        <Markdown source={require("./intro.md")} />
      </div>
      <aside className="intro--aside" />
    </section>
    <div className="grid--5col" id="schedule">
      <Markdown source={require("./content.md")} />
    </div>
  </Fragment>
);

export default ScheduleIndex;
