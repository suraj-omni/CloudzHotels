import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HotelSigiriyaSlider from "./hotelsigiriyaslider";
import Image from "react-bootstrap/Image";
import NearByAttractionSlider from "./nearbyattractionslidere";
import HomePageGallary from './homepagegallary';
import SHImageGallary from './sigiriyahotelimagegallary';

class SigiriyaHome extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <HotelSigiriyaSlider></HotelSigiriyaSlider>
        <Container id="hotelsigiriyacontainer" className="">
          <Row className="my-4">
            <Col>
              <div className="f-pf p-1">
                <h3>ABOUT CLOUDZ SIGIRIYA</h3>
              </div>
            </Col>
          </Row>
          <Row className="my-4 mx-1 border rounded-sm">
            <Col xs={12} md={4} className="p-2">
              <Image
                className="p-1"
                src="../../img/cloudz-sigiriya-logo.png"
                fluid
              />
            </Col>
            <Col xs={12} md={8} className="p-2">
              <div className="f-pf p-1 text-left">
                <h5>EXPERIENCE THE DIFFERENCE</h5>
              </div>
              <p className="p-2 text-justify">
                Located in Sigiriya central province of Sri Lanka amidst the
                UNESCO world heritage site, 5 km away from the world renowned
                ancient “Sigiriya Rock”. Cloudz Sigiriya is well spread over a
                privately owned eloquently Designed, well secured 1 acre land
                area with lush green and plenty of space for guests enjoys their
                holiday in a very tranquil environment. The resort speaks of a
                very natural “back to nature” concept with cottage style
                thatched roofed accommodation and consists of a Reception,
                Restaurant, Kitchen, Staff Accommodation Drivers Accommodation
                and a Vehicle Parking area. The property is situated in the
                village Rangirigama which is 4 km off the main Sigiriya road and
                just 1 kilo meter away from Jetwing Vil Uyana Hotel.
              </p>
            </Col>
          </Row>
          {/* 3 nav bar items */}
          <Row>
            <Col>
              <div className="f-pf p-1">
                <h3>BOOKING PARTNERS</h3>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center my-4 mx-1 border rounded-sm p-4">
            <Col className="">
              <ul id="navigationlist" className="list-unstyled">
                <li className="">
                  <a
                    target="blank"
                    href="https://www.booking.com/hotel/lk/green-ayurvedic-resort.html"
                  >
                    <Image
                      className="belogosize"
                      src="../../img/bookingdotcom-logo.png"
                      fluid
                    />
                  </a>
                </li>
                <li className="">
                  <a
                    target="blank"
                    href="https://www.agoda.com/cloudz-sigiriya_3/hotel/sigiriya-lk.html?mesrc=RU"
                  >
                    <Image
                      className="belogosize"
                      src="../../img/agoda-logo.png"
                      fluid
                    />
                  </a>
                </li>
                <li className="">
                  <a
                    target="blank"
                    href="https://www.expedia.com/Dambulla-Hotels-Green-Ayurvedic-Resort.h12874874.Hotel-Information"
                  >
                    <Image
                      className="belogosize"
                      src="../../img/expedia-logo.jpg"
                      fluid
                    />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>

          {/* end of 3 nav bar items */}
          {/* near by attraction */}
          <Row className="my-4">
            <Col className="p-2">
              <div className="f-pf p-1">
                <h3>NEAR BY ATTRACTIONS</h3>
              </div>
            </Col>
          </Row>
          <Row className="my-4 mx-1 border rounded-sm p-4">
            <Col className="p-2">
              <NearByAttractionSlider></NearByAttractionSlider>
            </Col>
          </Row>
          {/* end of near by attraction */}
          {/* start accommodation */}
          <Row className="my-4">
            <Col className="p-2">
              <div className="f-pf p-1">
                <h3>ACCOMMODATION</h3>
              </div>
            </Col>
          </Row>
          <Row className="my-4 mx-1 align-items-center justify-content-center border rounded-sm p-4">
            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 3, order: 1 }}
              className="m-1 p-1"
            >
              <div className="descripfont">
                10 Rustic Style Adjoining & Individual Villa type rooms
              </div>
            </Col>
            <Col
              xs={{ span: 12, order: 2 }}
              md={{ span: 3, order: 2 }}
              className="m-1 p-1 shadow"
            >
              <div className="accomadateimgwrapper">
                <Image
                  className="accomadationpic"
                  src="../../img/accomadation/cloudz_sigiriya_rustic_rooms_outside.JPG"
                  fluid
                />

                <div className="overlay1">
                  <div className="overlayimage">
                    <Image
                      className="accomadationpic"
                      src="../../img/accomadation/cloudz_sigiriya_rustic_rooms_single.JPG"
                      fluid
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col
              xs={{ span: 12, order: 2 }}
              md={{ span: 3, order: 2 }}
              className="m-1 p-1 shadow"
            >
              <div className="accomadateimgwrapper">
                <Image
                  className="accomadationpic"
                  src="../../img/accomadation/cloudz_sigiriya_rustic_rooms_inside_bedview2.JPG"
                  fluid
                />

                <div className="overlay1">
                  <div className="overlayimage">
                    <Image
                      className="accomadationpic"
                      src="../../img/accomadation/cloudz_sigiriya_rustic_rooms_inside.JPG"
                      fluid
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col
              xs={{ span: 12, order: 3 }}
              md={{ span: 3, order: 4 }}
              className="m-1 p-1"
            >
              <div className="descripfont">
                <ul id="roomslist" className="list-unstyled">
                  <li className="">4 – Superior Deluxe Rooms (With AC)</li>
                  <li className="">2 – Deluxe Rooms (None AC)</li>
                  <li className="">2 – Standard Rooms (None AC)</li>
                  <li>2 – Suites (Under Construction)</li>
                </ul>
              </div>
            </Col>
            <Col
              xs={{ span: 12, order: 4 }}
              md={{ span: 3, order: 3 }}
              className="m-1 p-1 shadow"
            >
              <div className="accomadateimgwrapper">
                <Image
                  className="accomadationpic"
                  src="../../img/accomadation/cloudz_sigiriya_rustic_rooms_inside_bed_sheets1.JPG"
                  fluid
                />

                <div className="overlay1">
                  <div className="overlayimage">
                    <Image
                      className="accomadationpic"
                      src="../../img/accomadation/cloudz_sigiriya_rustic_rooms_entrance.JPG"
                      fluid
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col
              xs={{ span: 12, order: 4 }}
              md={{ span: 3, order: 3 }}
              className="m-1 p-1 shadow"
            >
              <div className="accomadateimgwrapper">
                <Image
                  className="accomadationpic"
                  src="../../img/accomadation/cloudz_sigiriya_rustic_bathrooms1.JPG"
                  fluid
                />

                <div className="overlay1">
                  <div className="overlayimage">
                    <Image
                      className="accomadationpic"
                      src="../../img/accomadation/cloudz_sigiriya_rustic_bathrooms2.JPG"
                      fluid
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          {/* end of accommodation */}

          {/* gallary */}
          <Row className="my-4">
            <Col className="p-2">
              <div className="f-pf p-1">
                <h3>IMAGE GALLARY</h3>
              </div>
            </Col>
          </Row>
          <Row className="my-4 mx-1 align-items-center justify-content-center">
          <Col className="">
          <SHImageGallary></SHImageGallary>
          </Col>
          </Row>
          {/* end of gallary */}

        </Container>
      </React.Fragment>
    );
  }
}

export default SigiriyaHome;
