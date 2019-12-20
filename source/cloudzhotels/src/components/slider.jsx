import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel2";
import 'react-owl-carousel2/lib/styles.css'; //Allows for server-side rendering.

class HomeSlider extends Component {
  state = {};
  render() {
    const options = {
      items: 1,
      nav: false,
      rewind: true,
      autoplay: true,
      center: true,
      loop: true,
      autoplayTimeout: 3000,
      animateIn:"fadeInLeft"
    };
    return (
      <React.Fragment>
        <OwlCarousel ref="CloudzHotelsSlider" options={options}>
        
          <div className="animated fadeInLeft">
          {/* <div className="overlay overlay-a"></div> */}
            <img src="../../img/slider/slider-1.jpg" alt="Sigiriya Rock"/>
          </div>
          <div>
          {/* <div className="overlay overlay-a"></div> */}
            <img src="../../img/slider/slider-2.jpg" alt="Cloudz Sigiriya Hotel  Entrance" />
          </div>
          <div>
          {/* <div className="overlay overlay-a"></div> */}
            <img src="../../img/slider/slider-3.jpg" alt="Cloudz Sigiriya Hotel  Swimming Pool" />
          </div>
          <div>
          {/* <div className="overlay overlay-a"></div> */}
            <img src="../../img/slider/slider-4.jpg" alt="Sri Lanka Anuradhapura" />
          </div>
          <div>
          {/* <div className="overlay overlay-a"></div> */}
            <img src="../../img/slider/slider-5.jpg" alt="Cloudz Sigiriya Hotel  Rooms" />
          </div>
        </OwlCarousel>
      </React.Fragment>
    );
  }
}

export default HomeSlider;
