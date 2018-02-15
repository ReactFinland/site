import React, { Fragment } from "react";
import { Markdown, connect } from "components";

const Imprint = ({ page: { main } }) => (
  <Fragment>
    <section className="intro intro_about">
      <div className="intro--main">
        <Markdown source={main} />
      </div>
    </section>
  </Fragment>
);

export default connect(`
{
  page(id: "imprint") {
    main
  }
}
`)(Imprint);
