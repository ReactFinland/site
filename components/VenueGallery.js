import React from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-image-lightbox";

const PHOTOS = [
  {
    src: require("assets/img/venue/confetti.jpg"),
    width: 2,
    height: 1,
    alt: "Confetti",
  },
  {
    src: require("assets/img/venue/atmosphere.jpg"),
    width: 1,
    height: 1,
    alt: "Atmosphere",
  },
  {
    src: require("assets/img/venue/bar.jpg"),
    width: 1,
    height: 1,
    alt: "Bar",
  },
  {
    src: require("assets/img/venue/dj.jpg"),
    width: 1.5,
    height: 1,
    alt: "DJ",
  },
  {
    src: require("assets/img/venue/gig.jpg"),
    width: 1.5,
    height: 1,
    alt: "Gig",
  },
];

class VenueGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }
  render() {
    const currentImage = this.state.currentImage;

    return (
      <div>
        <Gallery photos={PHOTOS} onClick={this.openLightbox} />
        {this.state.lightboxIsOpen && (
          <Lightbox
            mainSrc={PHOTOS[currentImage].src}
            onCloseRequest={this.closeLightbox}
          />
        )}
      </div>
    );
  }
  openLightbox(event, obj) {
    this.setState(() => ({
      currentImage: obj.index,
      lightboxIsOpen: true,
    }));
  }
  closeLightbox() {
    this.setState(() => ({
      lightboxIsOpen: false,
    }));
  }
}

export default VenueGallery;
