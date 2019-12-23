import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import SigiriyaHotelImageOverlay from "./imgoverlaysigiriyaslider";

class HotelSigiriyaSlider extends Component {
  state = {};
  render() {
    const options = {
      items: 1,
      nav: false,
      rewind: true,
      autoplay: true,
      center: false,
      loop: true,
      autoplayTimeout: 3000,
      animateIn: "fadeInLeft"
    };

    return (
      <React.Fragment>
        <OwlCarousel ref="CloudzHotelsSlider" options={options}>
          <div className="animated fadeInLeft">
            <SigiriyaHotelImageOverlay></SigiriyaHotelImageOverlay>
            <img
              src="../../img/sigiriyahotelslider/sigiriya-hotel-entrance.JPG"
              alt="Sigiriya Rock"
            />
          </div>
          <div>
            <SigiriyaHotelImageOverlay></SigiriyaHotelImageOverlay>
            <img
              src="../../img/sigiriyahotelslider/sigiriya-hotel-dining-area.JPG"
              alt="Cloudz Sigiriya Hotel  Entrance"
            />
          </div>
          <div>
            <SigiriyaHotelImageOverlay></SigiriyaHotelImageOverlay>
            <img
              src="../../img/slider/slider-3.jpg"
              alt="Cloudz Sigiriya Hotel  Swimming Pool"
            />
          </div>
          <div>
            <SigiriyaHotelImageOverlay></SigiriyaHotelImageOverlay>
            <img
              src="../../img/sigiriyahotelslider/sigiriya-hotel-room.jpg"
              alt="Sri Lanka Anuradhapura"
            />
          </div>
          <div>
            <SigiriyaHotelImageOverlay></SigiriyaHotelImageOverlay>
            <img
              src="../../img/slider/slider-5.jpg"
              alt="Cloudz Sigiriya Hotel  Rooms"
            />
          </div>
          <div>
            <SigiriyaHotelImageOverlay></SigiriyaHotelImageOverlay>
            <img
              src="../../img/sigiriyahotelslider/sigiriya-hotel-reception.jpg"
              alt="Cloudz Sigiriya Hotel  Rooms"
            />
          </div>
          <div>
            <SigiriyaHotelImageOverlay></SigiriyaHotelImageOverlay>
            <img
              src="../../img/sigiriyahotelslider/sigiriya-hotel-dining.jpg"
              alt="Cloudz Sigiriya Hotel  Rooms"
            />
          </div>
        </OwlCarousel>
      </React.Fragment>
    );
  }
}

export default HotelSigiriyaSlider;
