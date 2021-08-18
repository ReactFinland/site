import React from "react";

// https://www.youtube.com/embed/vpeO0J7FXAE
// https://www.youtube.com/live_chat?v=vpeO0J7FXAE&embed_domain=play.workadventu.re

const domain = "localhost"; // "play.workadventu.re"; // Try localhost locally
const id = "vpeO0J7FXAE"; // For youtube video id

const YouTubeEmbed = () => (
  <section className="intro">
    <div className="grid--full">
      <section className="flex-row">
        <iframe
          title="Vodcast – Test stream"
          width="60%"
          height="400"
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <iframe
          title="Vodcast – Test stream chat"
          width="40%"
          height="400"
          src={`https://www.youtube.com/live_chat?v=${id}&embed_domain=${domain}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </section>
    </div>
  </section>
);

export default YouTubeEmbed;
