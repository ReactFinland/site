import React from "react";
import Markdown from "./Markdown";
import AnchorHeader from "./AnchorHeader";
import Speakers from "./Speakers";

const Session = ({ item, item: { speakers, title, description } }) => (
  <div className="content-block">
    <AnchorHeader level={3}>{title || "To be announced."}</AnchorHeader>

    {description ? <Markdown source={description} /> : "To be announced."}

    <Speakers items={speakers} />
  </div>
);

export default Session;
