import React from "react";
import { hot } from "react-hot-loader";
import {
  AnchorHeader,
  AnchorProvider,
  Contacts,
  Header,
  Footer,
  Markdown,
  Sponsor,
  Subscribe,
  connect,
} from "../components";

import "normalize.css/normalize.css";
import "../styles/fontello-codes.css";
import "../styles/fontello-embedded.css";
import "../styles/style.scss";

const SiteBody = ({
  children,
  location: { pathname },
  page: { file: { title } },
  partners = [],
  goldSponsors = [],
  silverSponsors = [],
  bronzeSponsors = [],
}) => (
  <AnchorProvider>
    <main>
      <Header pathname={pathname} title={title} />
      <div className="main-container container">
        <section className="grid grid_6col">
          {children}
          <div className="grid--full">
            <div className="sponsors sponsors_gold">
              <AnchorHeader className="sponsors--heading" level={2}>
                🥇 Gold Sponsors
              </AnchorHeader>
              <section className="sponsors--list">
                <Contacts items={goldSponsors} render={Sponsor} />
                {goldSponsors.length < 2 && (
                  <a href="/for-sponsors/">Become a sponsor</a>
                )}
              </section>
            </div>
            <div className="sponsors sponsors_silver">
              <AnchorHeader className="sponsors--heading" level={2}>
                🥈 Silver Sponsors
              </AnchorHeader>
              <section className="sponsors--list">
                <Contacts
                  items={tweakSilverSponsors(silverSponsors)}
                  render={Sponsor}
                />
                {silverSponsors.length < 3 && (
                  <a href="/for-sponsors/">Become a sponsor</a>
                )}
              </section>
            </div>
            <div className="sponsors sponsors_bronze">
              <AnchorHeader className="sponsors--heading" level={2}>
                🥉 Bronze Sponsors
              </AnchorHeader>
              <section className="sponsors--list">
                <Contacts
                  items={tweakBronzeSponsors(bronzeSponsors)}
                  render={Sponsor}
                />
                {bronzeSponsors.length < 4 && (
                  <a href="/for-sponsors/">Become a sponsor</a>
                )}
              </section>
            </div>
          </div>

          <AnchorHeader level={2}>Partners</AnchorHeader>
          <div className="sponsors sponsors_partners grid--full">
            <section className="sponsors--list">
              <Contacts items={partners} render={Sponsor} />
            </section>
          </div>
        </section>
      </div>
      <Subscribe />
      <Footer />
    </main>
  </AnchorProvider>
);

function tweakSilverSponsors(sponsors) {
  // Tweak Nitor
  return sponsors.map(sponsor => {
    if (sponsor.name === "Nitor") {
      return {
        ...sponsor,
        logoProps: {
          style: {
            background: "black",
            padding: "1.5em",
          },
        },
      };
    }

    return sponsor;
  });
}

function tweakBronzeSponsors(sponsors) {
  // Tweak Rohea
  return sponsors.map(sponsor => {
    if (sponsor.name === "Rohea") {
      return {
        ...sponsor,
        logoProps: {
          style: {
            background: "black",
            padding: "1em",
          },
        },
      };
    }

    return sponsor;
  });
}

const sponsorQuery = `{ name, social { homepage }, about, image }`;
export default hot(module)(
  connect(`
{
  partners ${sponsorQuery},
  goldSponsors ${sponsorQuery},
  silverSponsors ${sponsorQuery},
  bronzeSponsors ${sponsorQuery},
}
`)(SiteBody)
);
