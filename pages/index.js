import React from "react";
import {
  AnchorHeader,
  Contacts,
  ContactMini,
  Markdown,
  Subscribe,
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
    <div className="grid--5col">
      <Subscribe>
        We sold out for 2018. We'll let you know when 2019 tickets become
        available!
      </Subscribe>
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
