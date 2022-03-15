import React from "react";
import { connect, Markdown, Sponsors } from "components";

const main = `
React Finland was a great success! Read about [what lessons we learned](/blog/react-finland-2018---lessons-learned-754a5f29067c/) and [how people experienced the conference](/blog/react-finland-2018---blog-coverage-e65bcece8946/).

See also [2018 speakers](/2018/speakers/), [schedule](/2018/schedule/), and [workshops](/2018/workshops/).`;

const PageFor2018 = ({ conference }) => (
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
  )(PageFor2018);
