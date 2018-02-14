import React from "react";
import { Contacts, connect } from "components";
import Speaker from "./Speaker";

const Speakers = ({ speakers }) => (
  <div className="grid--5col" id="schedule">
    <Contacts className="speakers" items={speakers} render={Speaker} />
  </div>
);

export default connect(`
{
  speakers {
    name,
    talks {
      title, description, type
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
