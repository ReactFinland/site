import React, { Fragment } from "react";
import { content } from "@react-finland/content-2018";
import { AnchorHeader, Contacts, Markdown } from "../components";
import Organizer from "./Organizer";

const AboutIndex = ({ section }) => (
  <Fragment>
    <section className="intro intro_about">
      <div className="intro--main">
        <Markdown source={require("./intro.md")} />
      </div>
      <aside className="intro--aside" />
    </section>

    <AnchorHeader level={2}>The Organizers</AnchorHeader>
    <div className="grid--5col">
      <p>
        React Finland is organized as a community effort. All of us are
        developers and this shows in the conference.
      </p>
    </div>
    <div className="grid--full organizers">
      <Contacts items={content.organizers} render={Organizer} />
    </div>
    <div className="grid--5col">
      <p>
        Our goal is to connect our valued speakers with our local community in
        the most fruitful way we can and provide Finnish hospitality to our
        conference visitors.
      </p>

      <p>
        We hope to create something unique by combining our northern traditions
        with speakers and visitors from all around the world.
      </p>
    </div>
  </Fragment>
);

export default AboutIndex;
