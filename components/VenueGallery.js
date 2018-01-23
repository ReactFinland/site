import React from "react";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";

const PHOTOS = [
  {
    src: require("assets/img/venue/confetti.jpg"),
    width: 2,
    height: 1,
  },
  {
    src: require("assets/img/venue/atmosphere.jpg"),
    width: 1,
    height: 1,
  },
  {
    src: require("assets/img/venue/bar.jpg"),
    width: 1,
    height: 1,
  },
  {
    src: require("assets/img/venue/dj.jpg"),
    width: 1.5,
    height: 1,
  },
  {
    src: require("assets/img/venue/gig.jpg"),
    width: 1.5,
    height: 1,
  },
];

class VenueGallery extends React.Component {
  constructor() {
    super();

    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  render() {
    return (
      <div>
        <Gallery photos={PHOTOS} onClick={this.openLightbox} />
        <Lightbox
          images={PHOTOS}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
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
      currentImage: 0,
      lightboxIsOpen: false,
    }));
  }
  gotoPrevious() {
    this.setState(previousState => ({
      currentImage: previousState.currentImage - 1,
    }));
  }
  gotoNext() {
    this.setState(previousState => ({
      currentImage: previousState.currentImage + 1,
    }));
  }
}

export default VenueGallery;
