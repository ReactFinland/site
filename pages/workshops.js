import React from "react";
import { Contacts, Workshop, connect } from "components";

const Workshops = ({ workshops }) => (
  <div className="grid grid--5col">
    <Contacts items={workshops} render={Workshop} />
  </div>
);

export default connect(`
{
  workshops {
    speakers {
      name, about, image
    }
    title,
    description
  }
}
`)(Workshops);
