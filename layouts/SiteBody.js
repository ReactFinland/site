import React from "react";
import PropTypes from "prop-types";
import { HelmetProvider } from "react-helmet-async";
import Interactive from "antwar-interactive";
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
import "../styles/style.scss";

const siteName = "React Finland";

const SiteBody = (
  {
    children,
    location: { pathname },
    page: { file: { title, description, keywords }, previous, next } = {},
    conference: {
      partners,
      goldSponsors,
      silverSponsors,
      bronzeSponsors,
      // platformSponsors,
    } = {
      partners: [],
      goldSponsors: [],
      silverSponsors: [],
      bronzeSponsors: [],
      // platformSponsors: [],
    },
  },
  { router }
) => {
  return (
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

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "1em",
              marginRight: "1em",
              marginTop: "1em",
            }}
          >
            {previous && (
              <a href={previous.url} title={previous.file.title}>
                Previous post
              </a>
            )}
            {next && (
              <a href={next.url} title={next.file.title}>
                Next post
              </a>
            )}
          </div>

          <div
            className={
              !pathname.startsWith("/youtube-embed") &&
              "main-container container"
            }
          >
            <section className="grid grid_6col">
              {children}
              <div className="grid--full">
                <div className="sponsors">
                  <AnchorHeader
                    className="sponsors--heading visually-hidden"
                    level={2}
                  >
                    Sponsors
                  </AnchorHeader>
                </div>
                <div className="sponsors sponsors_gold">
                  <AnchorHeader className="sponsors--heading" level={3}>
                    <span role="img" aria-label="First place medal">
                      🥇
                    </span>
                    Gold Sponsors
                  </AnchorHeader>
                  <section className="sponsors--list">
                    <Contacts items={goldSponsors} render={Sponsor} />
                    {goldSponsors.length < 2 && (
                      <a href="/for-sponsors/">Become a sponsor</a>
                    )}
                  </section>
                </div>
                <div className="sponsors sponsors_silver">
                  <AnchorHeader className="sponsors--heading" level={3}>
                    <span role="img" aria-label="Second place medal">
                      🥈
                    </span>
                    Silver Sponsors
                  </AnchorHeader>
                  <section className="sponsors--list">
                    <Contacts items={silverSponsors} render={Sponsor} />
                    {silverSponsors.length < 4 && (
                      <a href="/for-sponsors/">Become a sponsor</a>
                    )}
                  </section>
                </div>

                <div className="sponsors sponsors_bronze">
                  <AnchorHeader className="sponsors--heading" level={3}>
                    <span role="img" aria-label="Third place medal">
                      🥉
                    </span>
                    Bronze Sponsors
                  </AnchorHeader>
                  <section className="sponsors--list">
                    <Contacts
                      items={tweakSponsors.bronze(bronzeSponsors)}
                      render={Sponsor}
                    />
                    {bronzeSponsors.length < 6 && (
                      <a href="/for-sponsors/">Become a sponsor</a>
                    )}
                  </section>
                </div>

                {/*
                <div className="sponsors sponsors_gold">
                  <AnchorHeader className="sponsors--heading" level={3}>
                    <span role="img" aria-label="Third place medal">
                      🎊
                    </span>
                    Platform Sponsor
                  </AnchorHeader>
                  <section className="sponsors--list">
                    <Contacts items={platformSponsors} render={Sponsor} />
                  </section>
                </div>
 */}

                <div className="sponsors sponsors_partners">
                  <AnchorHeader className="sponsors--heading" level={3}>
                    Partners
                  </AnchorHeader>
                  <section className="sponsors--list">
                    <Contacts items={partners} render={Sponsor} />
                  </section>
                </div>
              </div>
            </section>
          </div>
          <Interactive id="components/Subscribe.js" component={Subscribe} />
          <Footer />
        </main>
      </AnchorProvider>
    </HelmetProvider>
  );
};
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
