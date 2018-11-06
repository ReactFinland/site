import React from "react";
import PropTypes from "prop-types";
import { Contacts, Speaker, connect } from "components";

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

export default connect(
  `
query PageQuery($conferenceId: ID!) {
  conference(id: $conferenceId) {
    speakers {
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
      country {
        code
      }
    }
  }
}
`,
  () => ({
    // TODO: Get this from a prop so the page can be used in different contexts
    conferenceId: "react-finland-2018",
  })
)(Speakers);
