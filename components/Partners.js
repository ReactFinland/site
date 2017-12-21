import React from "react";

const Partners = () => (
  <div className="content-block partners">
    <h2>Partners</h2>
    <a href="https://www.agent.sh/" className="partner">
      <img
        className="partner-logo"
        src={require("../assets/img/partners/agent.png")}
        width={100}
      />
      <span className="partner-name">Agent Conf</span>
    </a>
  </div>
);

export default Partners;
