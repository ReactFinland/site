import React from "react";

const SocialLinks = ({ type }) => {
  return (
    <div className="social-links">
      <h2 className="subscribe-header">
        Subscribe to the mailing list to know when registration opens.
      </h2>

      <form
        action="//react-finland.us16.list-manage.com/subscribe/post?u=a940d62db3f360204bf40b1c4&amp;amp;id=8c82fd10b8"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate social-form"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <div className="mc-field-group social-input-container">
            <input
              type="email"
              placeholder="Email"
              value=""
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
            />
          </div>
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
          <div className="social-subscribe-container">
            <input
              type="submit"
              className="btn button social-subscribe"
              style={{
                marginTop: "1em",
                marginBottom: "1em",
                lineHeight: "2em",
              }}
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SocialLinks;
