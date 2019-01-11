import React from "react";
import { Markdown } from "components";

const main = `
\`\`\`
React Finland ry
Lauttasaarentie 16 A 17
00200 Helsinki
\`\`\`

info <at> react-finland.fi
`;

const Imprint = () => (
  <section className="intro intro_imprint">
    <div className="intro--main">
      <Markdown source={main} />
    </div>
  </section>
);

export default Imprint;
