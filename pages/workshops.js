import React from "react";
import PropTypes from "prop-types";
import { Contacts, Workshop, Markdown, connect } from "components";

const intro = `All the workshops take place live at Paasitorni. To make sure it's worth it for our workshop organizers, we reserve the right to cancel workshops closer to their time if not enough people have signed up. In that case we'll cancel the and perform a full refund so that you'll get your money back.`;

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
