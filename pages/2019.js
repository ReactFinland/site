import React from "react";
import { connect, Markdown, Sponsors } from "components";

const main = `
React Finland was a great success! [See the recap video to see how it went!](https://www.youtube.com/watch?v=BO_osndeLII).

See also [2019 speakers](/2019/speakers/), [schedule](/2019/schedule/), and [workshops](/2019/workshops/).`;

const PageFor2019 = ({ conference }) => (
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
  )(PageFor2019);
