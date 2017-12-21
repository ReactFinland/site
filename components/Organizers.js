import React from "react";
import Markdown from "./Markdown";

const Organizer = ({ image, description }) => (
  <div className="organizer">
    {image && (
      <img
        className="author-photo"
        width={100}
        height={100}
        src={require(`../assets/img/organizers/${image}`)}
      />
    )}
    <Markdown source={description} />
  </div>
);

const Organizers = () => [
  <Organizer
    image="aarni.jpg"
    description={
      "You can reach Aarni Koskela through Twitter at [@akx](https://twitter.com/akx)."
    }
  />,
  <Organizer
    image="aleksi.jpg"
    description={
      "Aleksi Pousar works on the app and is the treasurer of the association. You can reach Aleksi Pousar through Twitter at [@AleksiPousar](https://twitter.com/AleksiPousar)."
    }
  />,
  <Organizer
    image="harri.jpg"
    description={
      "You can reach Harri Määttä through Twitter at [@HarriMaatta](https://twitter.com/HarriMaatta)."
    }
  />,
  <Organizer
    description={
      "Juho Vepsäläinen put together the conference schedule, handles speaker relations and marketing. You can reach him through Twitter at [@bebraw](https://twitter.com/bebraw)."
    }
  />,
  <Organizer
    image="samuli.jpg"
    description={
      "You can reach Samuli Hakoniemi through Twitter at [@zvona](https://twitter.com/zvona)."
    }
  />,
  <Organizer
    image="toni.png"
    description={
      "You can reach Toni Ristola through Twitter at [@toniristola](https://twitter.com/toniristola)."
    }
  />,
];

export default Organizers;
