import React from "react";
import { Sessions } from "../components";
import { enums, presentations } from "@react-finland/content-2018";

const PresentationIndex = ({ section }) => (
  <div className="flex">
    <div className="post-block post-block-full" id="schedule">
      <h2>Keynotes</h2>
      <Sessions
        items={filterObject(
          presentations,
          ({ type }) => type === enums.KEYNOTE
        )}
      />

      <h2>Presentations</h2>
      <Sessions items={filterObject(presentations, ({ type }) => !type)} />

      <h2>Lightning Talks</h2>
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
