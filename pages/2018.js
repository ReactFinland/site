import React from "react";
import PropTypes from "prop-types";
import { Markdown, connect } from "components";

const Imprint = ({ page: { main } }) => (
  <section className="intro intro_about">
    <div className="intro--main">
      <p>
        React Finland was a great success! Read about{" "}
        <a href="https://medium.com/react-finland/react-finland-2018-lessons-learned-754a5f29067c">
          what lessons we learned
        </a>{" "}
        and{" "}
        <a href="https://medium.com/react-finland/react-finland-2018-blog-coverage-e65bcece8946">
          how people experienced the conference
        </a>.
      </p>
      <p>
        See also <a href="/2018/speakers/">2018 speakers</a>,{" "}
        <a href="/2018/schedule/">2018 schedule</a>, and{" "}
        <a href="/2018/workshops/">2018 workshops</a>.
      </p>
    </div>
  </section>
);
Imprint.propTypes = {
  page: PropTypes.object,
};

export default connect(`
{}
`)(Imprint);
