import React from "react";
import {
  AnchorHeader,
  Contacts,
  ContactMini,
  Markdown,
  connect,
} from "components";

const title = "Online mini-conference #3 - Design systems";
const intro = `
## ${title}

[The third online mini-conference](/blog/rf-2020-online-mini-conf-vol-3/) will take place 22nd of September (17:00-20:10 (premium), 17:30-20:10 (free), Finnish time) and it's about design systems.

Jani Eväkallio will MC the event and we'll have three exciting talks about the topic. In addition, we'll have an introduction level session to the topic for the premium subscribers.

See the free stream below:
`;

const pastEvents = `
## Past events

* [The second online mini-conference](/blog/rf-2020-online-mini-conf-vol-2-recap/) took place 27th of August and it was about state management.
* [The first online mini-conference](/blog/rf-2020-online-mini-conf-vol-1-recap/) took place 28th of May and it was about documentation.
`;

const rf2021 = `
## React Finland 2021

React Finland 2021 conference tickets are now available:

- The conference will take place 24-28.05.2021. The workshops will run 24-26.05 and the conference 27-28.05.
- We'll follow a similar format as earlier so the conference will be on a single track although we'll likely branch during the breaks into more impromptu sessions, QAs, and relaxation.
- The price of the conference portion begins from 399 € (inc. VAT) and it's available now. Once these tickets run out, the late price is going to be 499 €.
- Unlike usually, this time we have less tickets available, roughly 150 in total. That's due to ticket transfers to 2021.
- The workshops will be announced at a later time, likely during the Fall, as we have more information available.

> [Learn more about RF2021 from the announcement](/blog/rf-2021/)
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
        <iframe
          title={title}
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/gJ56-lwB8K0"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        />
        <Markdown source={pastEvents} />
        <iframe
          title={title}
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/CFe6rMUxpoM"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        />
        <iframe
          title={title}
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/sN01JuUIrsw"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        />
        <Markdown source={rf2021} />
        {/*<AnchorHeader level={3}>See how the 2019 event went</AnchorHeader>
        <iframe
          src="https://www.youtube.com/embed/BO_osndeLII"
          width="100%"
          height="400"
          frameBorder="0"
          title="React Finland 2019"
/>*/}
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
        <AnchorHeader level={2}>Speakers</AnchorHeader>
        <div className="grid--full speakers">
          <Contacts items={conference.speakers} render={ContactMini} />
        </div>
      </>
    )}
    {/*
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
    */}
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
