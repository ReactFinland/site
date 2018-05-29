import React from "react";
import PropTypes from "prop-types";
import { Markdown, connect } from "components";

const PageFor2018 = ({ page: { main } }) => (
  <section className="intro intro_about">
    <div className="intro--main">
      <Markdown source={main} />
    </div>
  </section>
);
PageFor2018.propTypes = {
  page: PropTypes.object,
};

export default connect(`
{
  page(id: "2018") {
    main
  }
}
`)(PageFor2018);
