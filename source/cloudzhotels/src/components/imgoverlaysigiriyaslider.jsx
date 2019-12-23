import React, { Component } from "react";
import Image from 'react-bootstrap/Image';

class SigiriyaHotelImageOverlay extends Component {
  state = {};
  render() {
    return (
      <div className="">
        <Image
          className="cslogo"
          src="../../img/cloudz-sigiriya-logo.png"
          fluid
        />
      </div>
    );
  }
}

export default SigiriyaHotelImageOverlay;
