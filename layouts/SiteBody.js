import React from "react";
import PropTypes from "prop-types";
import { HelmetProvider } from "react-helmet-async";
import {
  AnchorHeader,
  AnchorProvider,
  Contacts,
  Footer,
  Header,
  Meta,
  Sponsor,
  Subscribe,
  connect,
} from "../components";
import * as tweakSponsors from "./tweak-sponsors";

import "normalize.css/normalize.css";
import "../styles/fontello-codes.css";
import "../styles/fontello-embedded.css";
import "../styles/style.scss";

const siteName = "React Finland";

const SiteBody = (
  {
    children,
    location: { pathname },
    page: {
      file: { title, description, keywords },
    },
    conference: { partners, goldSponsors, silverSponsors, bronzeSponsors } = {
      partners: [],
      goldSponsors: [],
      silverSponsors: [],
      bronzeSponsors: [],
    },
  },
  { router }
) => (
  <HelmetProvider
    context={
      router && router.staticContext && router.staticContext.helmetContext
    }
  >
    <AnchorProvider>
      <Meta
        siteName={siteName}
        title={title}
        description={description}
        keywords={keywords}
      />
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
                  <Contacts items={silverSponsors} render={Sponsor} />
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
                    items={tweakSponsors.bronze(bronzeSponsors)}
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
  </HelmetProvider>
);
SiteBody.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
  page: PropTypes.object,
  conference: PropTypes.shape({
    partners: PropTypes.array,
    goldSponsors: PropTypes.array,
    silverSponsors: PropTypes.array,
    bronzeSponsors: PropTypes.array,
  }),
};

export default connect(`
  query SponsorQuery($conferenceId: ID!) {
    conference(id: $conferenceId) {
      partners {
        ...SponsorFragment
      }
      goldSponsors {
        ...SponsorFragment
      }
      silverSponsors {
        ...SponsorFragment
      }
      bronzeSponsors {
        ...SponsorFragment
      }
    }
  }

  fragment SponsorFragment on Contact {
    name
    social {
      homepage
    }
    about
    image {
      url
    }
  }

`)(SiteBody);
