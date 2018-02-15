import React from "react";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="subscribe--wrapper">
        <h2 className="subscribe--header">
          Subscribe to get React Finland related news to your mail.
        </h2>

        <form
          action="//react-finland.us16.list-manage.com/subscribe/post?u=a940d62db3f360204bf40b1c4&amp;amp;id=8c82fd10b8"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="subscribe--form"
          target="_blank"
          noValidate
        >
          <input
            type="email"
            placeholder="john@domain.com"
            name="EMAIL"
            className="subscribe--input"
            id="mce-EMAIL"
            required
          />
          <div
            style={{
              display: "none",
              position: "absolute",
              left: "-5000px",
            }}
          >
            <input
              type="text"
              name="b_ed40c0084a0c5ba31b3365d65_b853b8e786"
              tabIndex="-1"
              value=""
            />
          </div>
          <button
            type="submit"
            className="subscribe--button"
            name="subscribe"
            id="mc-embedded-subscribe"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
