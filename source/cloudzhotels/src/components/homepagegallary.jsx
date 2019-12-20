import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel2";
import 'react-owl-carousel2/lib/styles.css';

class HomePageGallary extends Component {
  state = {};

  render() {
    const options = {
      items: 1,
      nav: false,
      rewind: true,
      autoplay: true,
      animateIn: "slideInLeft",
      center: true,
      loop: true,
      autoplayTimeout: 4000,
      responsive: {
          425: {
            items:1,
            nav:false
          },
          768: {
            items:3,
            nav:false
          }
      }
    };

    return (
      <React.Fragment>
        {/* <ImageGallery items={images} /> */}
        <OwlCarousel ref="car" options={options}>
          <div>
            
            <img src="../../img/hmsliderbusiness/cloudz-hotel-poolandrooms.JPG" alt="The Last of us" />
          </div>
          <div>
            
            <img src="../../img/hmsliderbusiness/cloudz-hotel-dining.JPG" alt="GTA V" />
          </div>
          <div>
           
            <img src="../../img/hmsliderbusiness/cloudz-hotel-room.JPG" alt="Mirror Edge" />
          </div>
          <div>
            
            <img src="../../img/hmsliderbusiness/cloudz-hotel-bbq.JPG" alt="Mirror Edge" />
          </div>
          <div>
            <img src="../../img/hmsliderbusiness/sigiriya-rock.jpg" alt="Mirror Edge" />
          </div>
        </OwlCarousel>
      </React.Fragment>
    );
  }
}

export default HomePageGallary;
