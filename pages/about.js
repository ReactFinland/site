import React from "react";
import {
  AnchorHeader,
  Contacts,
  Markdown,
  Organizer,
  connect,
} from "components";

const intro = `
Our goal is to connect our valued speakers with our local community in the most fruitful way we can and provide Finnish hospitality to our conference visitors.

We hope to create something unique by combining our northern traditions with speakers and visitors from all around the world.
`;

const About = ({ conference }) => (
  <>
    <section className="intro intro_about">
      <div className="intro--main">
        <Markdown source={intro} />
      </div>
      <aside className="intro--aside" />
    </section>

    <AnchorHeader level={2}>The Organizers</AnchorHeader>
    <div className="grid--5col">
      <p>
        React Finland is organized as a community effort. All of us are
        developers and this shows in the conference.
      </p>
    </div>
    <div className="grid--full organizers">
      <Contacts
        items={conference && conference.organizers}
        render={Organizer}
      />
    </div>
  </>
);

export default connect(`
query PageQuery($conferenceId: ID!) {
  conference(id: $conferenceId) {
    organizers {
      name
      image {
        url
      }
      about
    }
  }
}

`)(About);
