import React from "react";
import {
  AnchorHeader,
  Contacts,
  ContactMini,
  Markdown,
  connect,
} from "components";

const intro = `
React Finland combines the Finnish React community with international flavor. The first of its kind in Finland, the event consists of a workshop day and two days of talks around the topic.

In this single track event you will learn more about React and surrounding topics while meeting some of the leading talents of the community. In addition to enjoying the event, this is your chance to explore Finland.
`;

const secondary = `
By the way, we proudly follow [Berlin code of conduct](http://berlincodeofconduct.org/).
`;

const Index = ({ speakers }) => (
  <>
    <section className="intro intro_home">
      <div className="intro--main">
        <Markdown source={intro} />
      </div>
      <aside className="intro--aside">
        <Markdown source={secondary} />
      </aside>
    </section>
    <AnchorHeader level={2}>Past Speakers</AnchorHeader>
    <div className="grid--full speakers">
      <Contacts items={speakers} render={ContactMini} />
    </div>
  </>
);

export default connect(
  `
query PageQuery($conferenceId: ID!) {
  conference(id: $conferenceId) {
    speakers {
      name
      about
      social {
        homepage
        github
        twitter
        linkedin
      }
      image {
        url
      }
    }
  }
}
`,
  () => ({
    conferenceId: "react-finland-2018",
  })
)(Index);
