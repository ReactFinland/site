import React from "react";
import PropTypes from "prop-types";

const Subscribe = ({
  children = "Subscribe to get React Finland related news to your mail.",
}) => {
  return (
    <section
      className="subscribe"
      style={{ padding: "2em", textAlign: "center" }}
    >
      <data
        id="mj-w-res-data"
        data-token="fd098aa40e8dccbaa2dd415c3003999f"
        className="mj-w-data"
        data-apikey="5h9R"
        data-w-id="qG4"
        data-lang="en_US"
        data-base="https://app.mailjet.com"
        data-width="640"
        data-height="383"
        data-statics="statics"
      ></data>
      <div
        className="mj-w-button mj-w-btn"
        style={{
          fontFamily: "Finlandica, Helvetica",
          color: "#1863bd",
          padding: "0px 1em",
          backgroundColor: "rgb(100%, 100%, 100%, 0.7)",
          display: "inline-block",
          borderRadius: "25px",
        }}
      >
        <div
          role="button"
          tabIndex={0}
          className="mj-w-button-content"
          id="subscribe-button"
          data-token="fd098aa40e8dccbaa2dd415c3003999f"
          style={{
            fontFamily: "Finlandica, Helvetica",
            display: "inline-block",
          }}
          onClick={e => {
            e.preventDefault();
            mjOpenPopin(event, document.querySelector("#subscribe-button"));
          }}
          onKeyDown={e => {
            e.preventDefault();
            mjOpenPopin(event, document.querySelector("#subscribe-button"));
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
};
Subscribe.propTypes = {
  children: PropTypes.element,
};

export default Subscribe;
