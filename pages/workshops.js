import React from "react";
import PropTypes from "prop-types";
import { Contacts, Workshop, Markdown, connect } from "components";

const intro = `All the workshops take place live at Paasitorni. Note that full day workshops include a lunch and refreshments. If you participate into two half-day workshops, we'll organize lunch for you.`;

const Workshops = ({ conference }) => (
  <div className="grid grid--5col">
    <Markdown source={intro} />
    <Contacts items={conference && conference.workshops} render={Workshop} />
  </div>
);
Workshops.propTypes = {
  conference: PropTypes.object,
};

export default ({ conferenceId }) =>
  connect(
    `
query PageQuery($conferenceId: ID!) {
  conference(id: $conferenceId) {
    workshops {
      day
      begin
      end
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
      conferenceId,
    })
  )(Workshops);
