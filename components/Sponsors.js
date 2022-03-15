import React from "react";
import PropTypes from "prop-types";
import { AnchorHeader, Contacts, Sponsor } from "./";
import * as tweakSponsors from "./tweak-sponsors";

const Sponsors = ({
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
  partners,
}) => (
  <div className="grid--full">
    <div className="sponsors">
      <AnchorHeader className="sponsors--heading visually-hidden" level={2}>
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
);
Sponsors.propTypes = {
  partners: PropTypes.array,
  goldSponsors: PropTypes.array,
  silverSponsors: PropTypes.array,
  bronzeSponsors: PropTypes.array,
};

export default Sponsors;
