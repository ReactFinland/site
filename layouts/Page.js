import React from "react";
import PropTypes from "prop-types";
// import { Disqus } from "@survivejs/components";

const Page = ({ footer, children }) => {
  return (
    <div className="page grid--5col">
      <div className="page__container">
        <div className="page__main">
          <div className="page__section">{children}</div>
          <div className="page__section">
            {footer}

            <div id="disqus_thread" />

            {/*<Disqus shortname="survivejs" />*/}
          </div>
        </div>
      </div>
    </div>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  footer: PropTypes.object,
  children: PropTypes.node,
};

export default Page;
