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

export { tweakBronzeSponsors as bronze };
