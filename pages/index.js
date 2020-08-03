import React from "react";
import {
  AnchorHeader,
  Contacts,
  ContactMini,
  Markdown,
  connect,
} from "components";

const intro = `
## Online mini-conference #2 - State management

[The second online mini-conference](/blog/rf-2020-online-mini-conf-vol-2/) takes place 27th of August (16:45-20:40 (premium), 17:30-20:40 (free), Finnish time) and it is about state management.

Sara Vieira will MC the event and we'll have David Khourshid, Christian Alfoni, and Yan Laryushev speaking about the topic. The event will be held online through a video stream.

We have two options for participation:

* Free stream - during QAs and the panel, you'll see ads. The QA and panel content will be online later after the event
* Premium stream - you'll have direct access to the QAs and the panel. In addition, David Khourshid will give us an introduction to statecharts with an AMA before the main event begins. The premium event begins 16:45 due to this.

The links to the streams will be provided closer to the email you specified in your ticket purchase.

> [Read the recap of the first session](/blog/rf-2020-online-mini-conf-vol-1-recap/)

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
