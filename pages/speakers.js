import React from "react";
import PropTypes from "prop-types";
import { Contacts, Speaker, connect } from "components";

const Speakers = ({ speakers }) => (
  <div className="grid--5col" id="schedule">
    <Contacts className="speakers" items={speakers} render={Speaker} />
  </div>
);
Speakers.propTypes = {
  speakers: PropTypes.array,
};

export default connect(`
{
  speakers {
    name,
    talks {
      title, description, type,
      urls {
        slides
      }
    },
    workshops {
      title
    },
    image,
    social {
      homepage,
      github,
      twitter,
      linkedin
    },
    location { country { code } },
    about,
    keywords,
  }
}
`)(Speakers);
