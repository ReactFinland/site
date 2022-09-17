import React from "react";
import { connect, Markdown, Sponsors } from "components";

const main = `React Finland 2022 took place between 12th and 16th of September.

The first three days were focused on workshops while the last two where the conference itself.

See also [2022 speakers](/2022/speakers/), [schedule](/2022/schedule/), and [workshops](/2022/workshops/).

> [Learn more from the conference announcement](/blog/rf-2022/).`;

const PageFor2022 = ({ conference }) => (
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
  )(PageFor2022);
