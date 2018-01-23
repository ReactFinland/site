import React from "react";
import { content } from "@react-finland/content-2018";
import {
  AnchorContext,
  AnchorHeader,
  Contacts,
  ContactMini,
  Header,
  Markdown,
  Subscribe,
} from "../components";

const { partners, goldSponsors, silverSponsors, bronzeSponsors } = content;

import "normalize.css/normalize.css";
import "../styles/fontello-codes.css";
import "../styles/fontello-embedded.css";
import "../styles/style.scss";

const SiteBody = ({
  children,
  section,
  location: { pathname },
  page: { file: { title } },
}) => (
  <AnchorContext>
    <main>
      <section className="frontpage">
        <Header pathname={pathname} title={title} />
        <div className="main-container container">
          <section className="grid grid_6col">
            {children}
            <AnchorHeader level={2}>Sponsors</AnchorHeader>
            <div className="grid--full">
              <div className="sponsors sponsors_gold">
                <h3 className="sponsors--heading">🥇 Gold</h3>
                <section className="sponsors--list">
                  {goldSponsors.length ? (
                    <Contacts items={goldSponsors} render={ContactMini} />
                  ) : (
                    <a href="/for-sponsors/">Become a sponsor</a>
                  )}
                </section>
              </div>
              <div className="sponsors sponsors_silver">
                <h3 className="sponsors--heading">🥈 Silver</h3>
                <section className="sponsors--list">
                  {silverSponsors.length ? (
                    <Contacts items={silverSponsors} render={ContactMini} />
                  ) : (
                    <a href="/for-sponsors/">Become a sponsor</a>
                  )}
                </section>
              </div>
              <div className="sponsors sponsors_bronze">
                <h3 className="sponsors--heading">🥉 Bronze</h3>
                <section className="sponsors--list">
                  {bronzeSponsors.length ? (
                    <Contacts items={bronzeSponsors} render={ContactMini} />
                  ) : (
                    <a href="/for-sponsors/">Become a sponsor</a>
                  )}
                </section>
              </div>
            </div>

            <AnchorHeader level={2}>Partners</AnchorHeader>
            <div className="grid--full">
              <Contacts
                className="partners"
                items={partners}
                render={ContactMini}
              />
            </div>
          </section>
        </div>
        <Subscribe />
      </section>
    </main>
  </AnchorContext>
);

export default SiteBody;
