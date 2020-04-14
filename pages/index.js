import React from "react";
import {
  AnchorHeader,
  Contacts,
  ContactMini,
  Markdown,
  connect,
} from "components";

const intro = `
React Finland combines the Finnish React community with international flavor. The workshops take place online 25-27.05. The conference will run as a series of online mini-conferences starting 28.05 and will run monthly starting then.

[The physical portion of React Finland 2020 has been postponed to 2021](/blog/rf-2020-postponed/).
`;

const secondary = `
By the way, we proudly follow [Berlin code of conduct](http://berlincodeofconduct.org/).

[Join React Finland Slack to connect with other attendees!](https://join.slack.com/t/react-finland/shared_invite/enQtMzQ0NDM1ODczMjE2LTI3MjZlZGNjNTNkOTU5N2E1OWYxYzY0MWE0Y2NiNWMxMWZiMWEyYjc4MmM1ZDQwZmFhOTkyODBmM2E4NjcxZjM)
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
    {conference && conference.mcs && conference.mcs.length > 0 && (
      <>
        <AnchorHeader level={2}>MCs</AnchorHeader>
        <div className="grid--full speakers">
          <Contacts items={conference.mcs} render={ContactMini} />
        </div>
      </>
    )}
    {conference &&
      conference.keynoteSpeakers &&
      conference.keynoteSpeakers.length > 0 && (
        <>
          <AnchorHeader level={2}>Keynotes</AnchorHeader>
          <div className="grid--full speakers">
            <Contacts items={conference.keynoteSpeakers} render={ContactMini} />
          </div>
        </>
      )}
    {conference && conference.speakers && conference.speakers.length > 0 && (
      <>
        <AnchorHeader level={2}>Full talks</AnchorHeader>
        <div className="grid--full speakers">
          <Contacts items={conference.speakers} render={ContactMini} />
        </div>
      </>
    )}
    {conference &&
      conference.lightningTalkSpeakers &&
      conference.lightningTalkSpeakers.length > 0 && (
        <>
          <AnchorHeader level={2}>Lightning Talks</AnchorHeader>
          <div className="grid--full speakers">
            <Contacts
              items={conference.lightningTalkSpeakers}
              render={ContactMini}
            />
          </div>
        </>
      )}
    {conference &&
      conference.workshopInstructors &&
      conference.workshopInstructors.length > 0 && (
        <>
          <AnchorHeader level={2}>Workshops</AnchorHeader>
          <div className="grid--full speakers">
            <Contacts
              items={conference.workshopInstructors}
              render={ContactMini}
            />
          </div>
        </>
      )}
    <AnchorHeader level={2}>Tickets</AnchorHeader>
    <div className="intro--main">
      <p></p>
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
