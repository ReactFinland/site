import React from "react";
import values from "object.values";
import { presentations } from "@react-finland/content-2018";
import enums from "@react-finland/content-2018/src/enums"; // XXX
import { AnchorHeader, Sessions } from "../components";

const PresentationIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block post-block-full" id="schedule">
      <AnchorHeader level={2}>Keynotes</AnchorHeader>
      <Sessions
        items={values(presentations).filter(
          ({ type }) => type === enums.KEYNOTE
        )}
      />

      <AnchorHeader level={2}>Presentations</AnchorHeader>
      <Sessions items={values(presentations).filter(({ type }) => !type)} />

      <AnchorHeader level={2}>Lightning Talks</AnchorHeader>
      <Sessions
        items={values(presentations).filter(
          ({ type }) => type === enums.LIGHTNING_TALK
        )}
      />
    </div>
  </div>
);
PresentationIndex.description =
  "React Finland is a conference that comes with a workshop day and two days of presentations.";

export default PresentationIndex;
