import React from "react";
import {
  AnchorHeader,
  Contacts,
  ContactMini,
  Markdown,
  connect,
} from "components";

const intro = `
React Finland combines the Finnish React community with international flavor. The workshops take place 25-27.05 while the actual conference is between 28-29.05.

In this single track event you will learn more about React and surrounding topics while meeting some of the leading talents of the community. In addition to enjoying the event, this is your chance to explore Finland.

[Read seven reasons why you should come to React Finland!](https://medium.com/react-finland/seven-reasons-to-visit-2019-d290d3417b67)
`;

const secondary = `
By the way, we proudly follow [Berlin code of conduct](http://berlincodeofconduct.org/).

[Join React Finland Slack to connect with other attendees!](https://join.slack.com/t/react-finland/shared_invite/enQtMzQ0NDM1ODczMjE2LTJlZmUxNDEyMThkYzYxNDI0OTQ5ZDc5MTQ0N2Q5OGMwZmM1ZmI0ZDlkMzgxNDk5YTEzMDJiOGY2MjFlNzAxODk)
`;

const Index = ({ conference }) => (
  <>
    <section className="intro intro_home">
      <div className="intro--main">
        <Markdown source={intro} />
        <AnchorHeader level={3}>See how the 2019 event went</AnchorHeader>
        <iframe
          src="https://www.youtube.com/embed/BO_osndeLII"
          width="100%"
          height="400"
          frameBorder="0"
          title="React Finland 2019"
        />
      </div>
      <aside className="intro--aside">
        <Markdown source={secondary} />
      </aside>
    </section>
    {/*<AnchorHeader level={2}>MCs</AnchorHeader>
    <div className="grid--full speakers">
      <Contacts items={conference && conference.mcs} render={ContactMini} />
    </div>
    <AnchorHeader level={2}>Workshop Instructors</AnchorHeader>*/}
    <AnchorHeader level={2}>Keynotes</AnchorHeader>
    <div className="grid--full speakers">
      <Contacts
        items={conference && conference.keynoteSpeakers}
        render={ContactMini}
      />
    </div>
    <AnchorHeader level={2}>Full talks</AnchorHeader>
    <div className="grid--full speakers">
      <Contacts
        items={conference && conference.speakers}
        render={ContactMini}
      />
    </div>
    <AnchorHeader level={2}>Lightning Talks</AnchorHeader>
    <div className="grid--full speakers">
      <Contacts
        items={conference && conference.lightningTalkSpeakers}
        render={ContactMini}
      />
    </div>
    <AnchorHeader level={2}>Workshops</AnchorHeader>
    <div className="grid--full speakers">
      <Contacts
        items={conference && conference.workshopInstructors}
        render={ContactMini}
      />
    </div>
    <AnchorHeader level={2}>Tickets</AnchorHeader>
    <div className="intro--main">
      <p>
        The tickets for Freezing Edge begin from 199 eur (VAT included). The
        ticket includes access to the one day conference, lunch, snacks during
        the breaks, and an afterparty.
      </p>
    </div>
    <div className="buy-container">
      <a
        className="buy-button"
        href="https://fienta.com/react-finland-2020?e8677b7f3a2f2d38052763b8d1cd9117"
      >
        Buy tickets
      </a>
    </div>
  </>
);

export default connect(
  `
fragment SpeakerFragment on Contact {
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

query PageQuery($conferenceId: ID!) {
  conference(id: $conferenceId) {
    mcs {
      ...SpeakerFragment
    }
    keynoteSpeakers {
      ...SpeakerFragment
    }
    speakers {
      ...SpeakerFragment
    }
    lightningTalkSpeakers {
      ...SpeakerFragment
    }
    workshopInstructors {
      ...SpeakerFragment
    }
  }
}
`,
  () => ({
    conferenceId: "react-finland-2020",
  })
)(Index);
