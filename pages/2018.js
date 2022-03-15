import React from "react";
import { connect, Markdown } from "components";

const main = `
React Finland was a great success! Read about [what lessons we learned](/blog/react-finland-2018---lessons-learned-754a5f29067c/) and [how people experienced the conference](/blog/react-finland-2018---blog-coverage-e65bcece8946/).

See also [2018 speakers](/2018/speakers/), [schedule](/2018/schedule/), and [workshops](/2018/workshops/).`;

const PageFor2018 = () => (
  <section className="intro intro_about">
    <div className="intro--main">
      <Markdown source={main} />
    </div>
  </section>
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
  )(PageFor2018);
