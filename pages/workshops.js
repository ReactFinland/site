import React from "react";
import PropTypes from "prop-types";
import { Contacts, Workshop, connect } from "components";

const Workshops = ({ workshops }) => (
  <div className="grid grid--5col">
    <Contacts items={workshops} render={Workshop} />
  </div>
);
Workshops.propTypes = {
  workshops: PropTypes.array,
};

export default connect(`
{
  workshops {
    speakers {
      name, about, image
    }
    title,
    description,
    location {
      name,
      address,
      city
    }
  }
}
`)(Workshops);
