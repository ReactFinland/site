import React from "react";
import {
  AnchorHeader,
  Contacts,
  ContactMini,
  Markdown,
  connect,
} from "components";

const Index = ({ page = {}, speakers }) => (
  <>
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
      <Contacts items={speakers} render={ContactMini} />
    </div>
    <AnchorHeader level={2}>Tickets</AnchorHeader>
    <div className="grid--full">
      No more tickets for 2018. See you next year!
    </div>
  </>
);

export default connect(`
{
  speakers {
    name, about, social { homepage, github, twitter, linkedin }, image
  }
  page(id: "index") {
    intro, secondary
  }
}
`)(Index);
