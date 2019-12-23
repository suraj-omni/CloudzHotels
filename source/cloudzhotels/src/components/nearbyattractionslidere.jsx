import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";

class NearByAttractionSlider extends Component {
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
      animateIn: "fadeInLeft",
      responsive: {
          0:{
              items: 1
          },
          768: {
              items: 4  
          }
      }
    };

    return (
      <React.Fragment>
        <OwlCarousel ref="CloudzHotelsSlider" options={options}>
          <div>
              <div className="descriptionoverlay">Ancient Sigiriya Rock </div>
            <img
              src="../../img/nearbyattractions/sigiriya.jpg"
              alt="Sigiriya Rock"
            />
          </div>
          <div>
          <div className="descriptionoverlay">Minneriya National Park </div>
            <img
              src="../../img/nearbyattractions/Minneriya_National_Park.jpg"
              alt="Minneriya National Park"
            />
          </div>
          <div>
          <div className="descriptionoverlay">Dambulla Cave Temple </div>
            <img
              src="../../img/nearbyattractions/dambulla-cave-temple.jpg"
              alt="Dambulla Cave Temple"
            />
          </div>
          <div>
          <div className="descriptionoverlay">Natural Trails</div>
            <img
              src="../../img/nearbyattractions/natruetrails.jpg"
              alt="Natural Trails"
            />
          </div>
        </OwlCarousel>
      </React.Fragment>
    );
  }
}

export default NearByAttractionSlider;
