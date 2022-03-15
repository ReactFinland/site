import React from "react";
import { connect, Markdown, Sponsors } from "components";

const main = `React Finland 2021 took place between 30th of August and 3rd of September.

The conference sessions occurred online due to the exceptional circumstances. We ran the conference in a vodcast format that worked out like this:

* Each session was scoped to a specific theme
* There was be a host and three to four speakers
* The sessions took ~1.5-2h and there was a 15 minute slot to demo and present for each speaker
* You could send your questions and comments through YouTube and Twitch and we'll cover them live during the sessions

You can access the content freely. [See the schedule](/2021/schedule/) for the videos. You can also [try out our online venue](https://reactfinland.github.io/venue/).

> [Learn more from the conference announcement](/blog/react-finland-2021/) and [read about the highlights of the upcoming conference](/blog/rf21-schedule-highlights/).`;

const PageFor2021 = ({ conference }) => (
  <>
    <section className="intro intro_about">
      <div className="intro--main">
        <Markdown source={main} />
      </div>
    </section>
    <Sponsors {...conference} />
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

fragment SponsorFragment on Contact {
  name
  social {
    homepage
  }
  about
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
    partners {
      ...SponsorFragment
    }
    goldSponsors {
      ...SponsorFragment
    }
    silverSponsors {
      ...SponsorFragment
    }
    bronzeSponsors {
      ...SponsorFragment
    }
  }
}
`,
    () => ({
      conferenceId,
    })
  )(PageFor2021);
