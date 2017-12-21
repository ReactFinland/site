import React from "react";
import { AnchorHeader, Sessions } from "../components";
import { presentations } from "@react-finland/content-2018";
import enums from "@react-finland/content-2018/src/enums"; // XXX

const PresentationIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block post-block-full" id="schedule">
      <AnchorHeader level={2}>Keynotes</AnchorHeader>
      <Sessions
        items={filterObject(
          presentations,
          ({ type }) => type === enums.KEYNOTE
        )}
      />

      <AnchorHeader level={2}>Presentations</AnchorHeader>
      <Sessions items={filterObject(presentations, ({ type }) => !type)} />

      <AnchorHeader level={2}>Lightning Talks</AnchorHeader>
      <Sessions
        items={filterObject(
          presentations,
          ({ type }) => type === enums.LIGHTNING_TALK
        )}
      />
    </div>
  </div>
);
PresentationIndex.description =
  "React Finland is a conference that comes with a workshop day and two days of presentations.";

function filterObject(object, filter) {
  const ret = {};

  Object.keys(object).forEach(k => {
    const v = object[k];

    if (filter(v)) {
      ret[k] = v;
    }
  });

  return ret;
}

export default PresentationIndex;
