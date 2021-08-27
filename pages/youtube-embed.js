import React from "react";

// https://www.youtube.com/embed/vpeO0J7FXAE
// https://www.youtube.com/live_chat?v=vpeO0J7FXAE&embed_domain=react-finland.fi
// https://react-finland.fi/youtube-embed/?id=5olfi5wbgF4&domain=react-finland.fi

const YouTubeEmbed = () => (
  <section className="intro">
    <div className="grid--full">
      <section
        className="flex-row"
        x-state="{ id: getQueryParameter('id'), domain: getQueryParameter('domain') }"
      >
        <iframe
          style={{ width: "calc(100% - 300px)" }}
          title="YouTube embed"
          height="600"
          x-src="'https://www.youtube.com/embed/' + state.id"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <iframe
          title="YouTube embed chat"
          height="600"
          x-src="'https://www.youtube.com/live_chat?v=' + state.id + '&embed_domain=' + state.domain"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </section>
    </div>
  </section>
);

export default YouTubeEmbed;
