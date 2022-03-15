import React from "react";
import {
  AnchorHeader,
  connect,
  ContactMini,
  Contacts,
  Markdown,
} from "components";

const intro = `React Finland 2022 will take place between 12th and 16th of September as a live conference at Paasitorni, Helsinki.

[To learn about the event, read our launch post](/blog/rf-2022/)`;

/*
const pastEvents = `
## Past events

* The fifth vodcast took place 29th of June 2021 and it focused on design tools.
* The fourth vodcast took place 26th of May 2021 and it focused on Next.js.
* The third vodcast took place 29th of April 2021 and it focused on full stack React.
* The second vodcast took place 29th of March 2021 and it focused on accessibility.
* The first vodcast took place 24th of February 2021 and it focused on React components.
* [The fifth online mini-conference](/blog/rf-2020-online-mini-conf-vol-5-recap/) took place 2nd of December and it was about performance.
* [The fourth online mini-conference](/blog/rf-2020-online-mini-conf-vol-4-recap/) took place 28th of October and it was about lessons learned.
* [The third online mini-conference](/blog/rf-2020-online-mini-conf-vol-3-recap/) took place 22nd of September and it was about design systems.
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
*/

const secondary = `
By the way, we proudly follow [Berlin code of conduct](http://berlincodeofconduct.org/).

[Join React Finland Slack to connect with other attendees!](https://join.slack.com/t/react-finland/shared_invite/enQtMzQ0NDM1ODczMjE2LTI3MjZlZGNjNTNkOTU5N2E1OWYxYzY0MWE0Y2NiNWMxMWZiMWEyYjc4MmM1ZDQwZmFhOTkyODBmM2E4NjcxZjM)
`;

const Index = ({ conference }) => (
  <>
    <section className="intro intro_home">
      <div className="intro--main">
        <Markdown source={intro} />
        {/*<iframe
          title="Mini-conf #05 - Performance"
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/5ZHJlcGT2lk"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />*/}

        {/*<Markdown source={pastEvents} />*/}
        {/*<Markdown source={rf2021} />*/}
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
    {/*conference &&
      conference.keynoteSpeakers &&
      conference.keynoteSpeakers.length > 0 && (
        <>
          <AnchorHeader level={2}>Keynotes</AnchorHeader>
          <div className="grid--full speakers">
            <Contacts items={conference.keynoteSpeakers} render={ContactMini} />
          </div>
        </>
      )*/}
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
      )}*/}
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
    <div className="buy-container">
      <a className="buy-button" href="https://fienta.com/react-finland-2022">
        Register
      </a>
    </div>
    {/*
    <div className="intro">
      <div className="intro--main">
        <AnchorHeader level={2}>Past vodcasts</AnchorHeader>
        <section className="flex-column">
          <iframe
            title="Vodcast #05 – Design tools"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/AuwpOsrzHC8"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            title="Vodcast #04 – Next.js"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/mMU-j0WoTCs"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            title="Vodcast #03 – Full Stack React"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/ee3riQ0aVbs"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            title="Vodcast #02 – Accessibility"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/jouctaXwpdU"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            title="Vodcast #01 – Components"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/o_TqhovGSjk"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </section>

        <AnchorHeader level={2}>Past mini-confs</AnchorHeader>
        <section className="flex-column">
          <iframe
            title="Mini-conf #05 - Performance"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/5ZHJlcGT2lk"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            title="Mini-conf #04 - Lessons learned"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/i9D-Gh8QH2U"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            title="Mini-conf #03 - Design systems"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/gJ56-lwB8K0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            title="Mini-conf #02 - State management"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/CFe6rMUxpoM"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            title="Mini-conf #01 - Documentation"
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/sN01JuUIrsw"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </section>
      </div>
    </div>*/}
  </>
);

export default ({ conferenceId }) =>
  connect(
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
      conferenceId,
    })
  )(Index);
