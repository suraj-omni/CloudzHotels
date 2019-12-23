import React, { Component } from "react";
import ImageGallery from "react-image-gallery";

class SHImageGallary extends Component {
  state = {};
  render() {
    const images = [
      {
        original: "../../img/gallary/cloudz_sigiriya_entrance.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_entrance.JPG",
        originalClass: "gallaryimagesize"
        
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_path.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_path.JPG",
        originalClass: "gallaryimagesize"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_dinig_room.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_dinig_room.JPG"
      },{
        original: "../../img/gallary/cloudz_sigiriya_reception.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_reception.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_rooms1.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_rooms1.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_rooms2.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_rooms2.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_rooms3.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_rooms3.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_rooms4.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_rooms4.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_rooms5.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_rooms5.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_rooms_entrance.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_rooms_entrance.JPG"
      },{
        original: "../../img/gallary/cloudz_sigiriya_room1.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_room1.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_room2.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_room2.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_room3.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_room3.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_room4.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_room4.JPG"
      },{
        original: "../../img/gallary/cloudz_sigiriya_room5.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_room5.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_room6.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_room6.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_bathroom4.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_bathroom4.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_bathroom3.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_bathroom3.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_bathroom1.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_bathroom1.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_swimmingpool2.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_swimmingpool2.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_swimmingpool1.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_swimmingpool1.JPG"
      },{
        original: "../../img/gallary/cloudz_sigiriya_swimming1.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_swimming1.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_swimming_pool2.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_swimming_pool2.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_swimming_pool3.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_swimming_pool3.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_swimming_pool_stairs.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_swimming_pool_stairs.JPG"
      },{
        original: "../../img/gallary/cloudz_sigiriya_dining1.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_dining1.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_dining2.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_dining2.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_dining3.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_dining3.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_dining4.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_dining4.JPG"
      },{
        original: "../../img/gallary/cloudz_sigiriya_dining5.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_dining5.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_dining6.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_dining6.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_dining7.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_dining7.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_dining8.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_dining8.JPG"
      },{
        original: "../../img/gallary/cloudz_sigiriya_dining9.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_dining9.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_dining_bbq1.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_dining_bbq1.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_dining_bbq2.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_dining_bbq2.JPG"
      },
      {
        original: "../../img/gallary/cloudz_sigiriya_dining_bbq3.JPG",
        thumbnail: "../../img/gallary/cloudz_sigiriya_dining_bbq3.JPG"
      },
    ];

    return <ImageGallery showIndex="true" showBullets="true" items={images} />;
  }
}

export default SHImageGallary;
