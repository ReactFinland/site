import React from "react";
import { Markdown } from "components";

const main = `
React Finland was a great success! [See the recap video to see how it went!](https://www.youtube.com/watch?v=BO_osndeLII).

See also [2019 speakers](/2019/speakers/), [schedule](/2019/schedule/), and [workshops](/2019/workshops/).`;

const PageFor2019 = () => (
  <section className="intro intro_about">
    <div className="intro--main">
      <Markdown source={main} />
    </div>
  </section>
);

export default PageFor2019;
