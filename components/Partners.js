import React from "react";
import AnchorHeader from "./AnchorHeader";

const Partners = () => (
  <div className="content-block partners">
    <AnchorHeader level={2}>Partners</AnchorHeader>
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
