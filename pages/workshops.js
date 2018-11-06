import React from "react";
import PropTypes from "prop-types";
import { Contacts, Workshop, connect } from "components";

const Workshops = ({ conference }) => (
  <div className="grid grid--5col">
    <Contacts items={conference && conference.workshops} render={Workshop} />
  </div>
);
Workshops.propTypes = {
  conference: PropTypes.object,
};

export default connect(
  `
query PageQuery($conferenceId: ID!) {
  conference(id: $conferenceId) {
    workshops {
      speakers {
        name
        about
        image {
          url
        }
      }
      title
      description
      location {
        name
        address
        city
      }
    }
  }
}
`,
  () => ({
    // TODO: Get this from a prop so the page can be used in different contexts
    conferenceId: "react-finland-2018",
  })
)(Workshops);
