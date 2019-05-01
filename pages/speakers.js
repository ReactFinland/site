import React from "react";
import PropTypes from "prop-types";
import { Contacts, Speaker, connect } from "../components";

const Speakers = ({ conference }) => (
  <div className="grid--5col" id="schedule">
    <Contacts
      className="speakers"
      items={conference && conference.speakers}
      render={Speaker}
    />
  </div>
);
Speakers.propTypes = {
  conference: PropTypes.object,
};

export default ({ conferenceId }) =>
  connect(
    `
query PageQuery($conferenceId: ID!) {
  conference(id: $conferenceId) {
    speakers {
      name
      talks {
        title
        type
        description
        urls {
          slides
          web
        }
      }
      workshops {
        title
        type
        description
      }
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
      country {
        code
      }
    }
  }
}
`,
    () => ({
      conferenceId,
    })
  )(Speakers);
