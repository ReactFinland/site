import React, { Fragment } from "react";
import { AnchorHeader, Contacts, Markdown, connect } from "components";

const ForSponsors = ({ page = {} }) => (
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

export default connect(`
{
  page(id: "for-sponsors") {
    intro, main
  }
}
`)(ForSponsors);
