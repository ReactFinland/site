import React from "react";
import { Markdown } from "components";

const main = `
\`\`\`
React Finland ry
Lauttasaarentie 16 A 17
00200 Helsinki
\`\`\`

* info <at> react-finland.fi
* Business ID: 2873394-3
`;

const Imprint = () => (
  <section className="intro intro_imprint">
    <div className="intro--main">
      <Markdown source={main} />
    </div>
  </section>
);

export default Imprint;
