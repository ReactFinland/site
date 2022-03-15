import React from "react";
import PropTypes from "prop-types";
import { HelmetProvider } from "react-helmet-async";
import Interactive from "antwar-interactive";
import { AnchorProvider, Footer, Header, Meta, Subscribe } from "../components";

import "normalize.css/normalize.css";
import "../styles/style.scss";

const siteName = "React Finland";

const SiteBody = (
  {
    children,
    location: { pathname },
    page: { file: { title, description, keywords }, previous, next } = {},
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
            <section className="grid grid_6col">{children}</section>
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

export default SiteBody;
