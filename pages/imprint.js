import React from "react";
import { Markdown } from "components";

const main = `
\`\`\`
TOSKA Osuuskunta
c/o Aleksi Pousar
Lauttasaarentie 16 A 17
00200 Helsinki
\`\`\`

* info <at> react-finland.fi
* VAT: FI30883078
`;

const Imprint = () => (
  <section className="intro intro_imprint">
    <div className="intro--main">
      <Markdown source={main} />
    </div>
  </section>
);

export default Imprint;
