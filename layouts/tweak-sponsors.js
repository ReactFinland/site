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

export { tweakSilverSponsors as silver, tweakBronzeSponsors as bronze };
