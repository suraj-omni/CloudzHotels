import React, { Component } from "react";
import HomeSlider from './slider';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomePageGallary from "./homepagegallary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faWineGlassAlt } from "@fortawesome/free-solid-svg-icons";
import { faLuggageCart } from "@fortawesome/free-solid-svg-icons";

class MainHome extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <HomeSlider></HomeSlider>
        <Container>
          <Row className="my-4">
            <Col>
              <h3 data-aos="fade-up-right" className="f-pf">
                WELCOME TO CLOUDZ HOSPITALITY MANAGEMENT IN SRI LANKA
              </h3>
            </Col>
          </Row>
          <Row className="my-4 p-2 text-justify">
            <Col>
              <p data-aos="fade-up-left">
                Welcome to Cloudz Hospitality Management (Pvt.) Ltd. A chain of
                Hotels, Resorts, Restaurants & Cafes in Sri Lanka, with a
                passion for style and a penchant for fun. Cloudz Hospitality
                Management (Pvt.) Ltd is a brand new upcoming hospitality
                related business organization owned and operated by a very
                experience Entrepreneur l with a wealth of experience in
                managing / operating luxury & semi luxury properties in the
                hospitality business in Sri Lanka and overseas. Objective of the
                founder is to develop this unique brand and launch it by early
                2018 to a recognized hotel, resort, restaurant and café
                operating chain with its own unique and creative service style.
              </p>
            </Col>
          </Row>
          {/* vision mission core values */}
          <Row className="my-4">
            <Col xs={12} md={4}>
              <Row className="my-2">
                <Col data-aos="fade-up-right" sm={12} className="my-2 fa-size">
                  <FontAwesomeIcon  icon={faEye} />
                </Col>
                <Col sm={12} className="my-2">
                  <h4 data-aos="fade-up-right" className="f-pf">Vision</h4>
                </Col>
                <Col sm={12} className="my-2">
                  <p data-aos="slide-down" className="text-center">
                    To become a leading boutique style resorts/hotel operator in
                    the region providing all natural experiences combined with
                    unparalleled personalized service to all our guests.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={4}>
              <Row className="my-2">
                <Col data-aos="fade-down" sm={12} className="my-2 fa-size">
                  <FontAwesomeIcon  icon={faUtensils} />
                </Col>
                <Col sm={12} className="my-2">
                  <h4 data-aos="fade-up" className="f-pf">Mission</h4>
                </Col>
                <Col sm={12} className="my-2">
                  <p data-aos="slide-down" className="text-center">
                    We strive to be excellent hospitality & service industry
                    leaders and will undertake all our business activities in an
                    honest and ethical manner to provide the best hospitality
                    and service to our guests.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={4}>
              <Row className="my-2">
                <Col data-aos="fade-up-left" sm={12} className="my-2 fa-size">
                  <FontAwesomeIcon  icon={faGem} />
                </Col>
                <Col sm={12} className="my-2">
                  <h4 data-aos="fade-up-left" className="f-pf">Core Values</h4>
                </Col>
                <Col sm={12} className="my-2">
                  <p data-aos="slide-down" className="text-center">
                    We treat each other with respect and act with integrity in
                    all our dealings. We build strong relationships with our
                    guests and all communities with caring for our nature and
                    respecting all cultures.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* end of vison mission core values */}
          {/* about us */}
          <Row className="my-4">
            <Col>
              <h3 data-aos="fade-up-right" className="f-pf">ABOUT US</h3>{" "}
            </Col>
          </Row>
          <Row className="my-4 text-justify p-2">
            <Col>
              <p data-aos="fade-up-left">
                Cloudz Hospitality Management (Pvt.) Ltd is a brand new upcoming
                hospitality related business organization owned and operated by
                an experienced innovative entrepreneur with a wealth of
                experience in managing / operating luxury & semi luxury
                properties in the hospitality business in Sri Lanka and
                overseas. Objective of the ownership and team Cloudz is to
                create/develop this unique brand and launch it by early 2018 to
                a recognized hotel, resort, restaurant and café operating chain
                with its own unique and distinctive service style.
              </p>
            </Col>
          </Row>
          {/* end of about us */}
          <Row className="my-4">
            <Col>
              <HomePageGallary></HomePageGallary>
            </Col>
          </Row>
          {/* core business areas */}
          <Row className="my-4">
            <Col>
              <h3 data-aos="fade-up-right" className="f-pf">KEY BUSINESS FOCUS AREAS</h3>{" "}
            </Col>
          </Row>
          <Row className="my-4">
            <Col xs={12} md={4}>
              <Row className="my-2">
                <Col data-aos="fade-up-right" sm={12} className="my-2 fa-size">
                  <FontAwesomeIcon  icon={faHotel} />
                </Col>
                <Col sm={12} className="my-2">
                  <h4 data-aos="fade-up-right" className="f-pf">Hotels and Resorts</h4>
                </Col>
                <Col sm={12} className="my-2">
                  <p data-aos="slide-down" className="text-justify">
                    Our focus is to provide our guests with uniquely designed
                    Hotels and Resorts with elegance simplicity, high level of
                    service for money and value for money.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={4}>
              <Row className="my-2">
                <Col data-aos="fade-down" sm={12} className="my-2 fa-size">
                  <FontAwesomeIcon  icon={faWineGlassAlt} />
                </Col>
                <Col sm={12} className="my-2">
                  <h4 data-aos="fade-down" className="f-pf">Restaurants and Cafes</h4>
                </Col>
                <Col sm={12} className="my-2">
                  <p data-aos="slide-down" className="text-justify">
                    Culinary brigade at "Cloudz" is committed to providing our
                    customers with the best of Sri Lankan and many other
                    cuisines from around the world.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={4}>
              <Row className="my-2">
                <Col data-aos="fade-up-left" sm={12} className="my-2 fa-size">
                  <FontAwesomeIcon  icon={faLuggageCart} />
                </Col>
                <Col sm={12} className="my-2">
                  <h4 data-aos="fade-up-left" className="f-pf">Inbound Tour Operator</h4>
                </Col>
                <Col sm={12} className="my-2">
                  <p data-aos="slide-down" className="text-justify">
                    "Cloudz" as an inbound Tour Operator is specialized in
                    creating the most economical and diverse, customized tour
                    experiences such as jeep Safaris to discover the true scenic
                    beauty of Sri Lankan nature, world renowned historical sites
                    and many other interesting places to showcase the real Sri
                    Lankan heritage.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          {/* end of core business areas */}
         {/* contact information  */}
         <Row>
           <Col xs={12} md={6} className="text-center my-4">
             <div data-aos="fade-in" data-aos-offset='100'  className="p-1 f-pf"><h5><strong>KEY CONTACT PERSON</strong></h5></div>
             <div data-aos="fade-in" data-aos-offset='100' className="p-1"><h6> <strong>(Reservations/Operations)</strong></h6> </div>
             <div data-aos="fade-in" data-aos-offset='100' className="p-1">Lakshman Chandraskera</div>
             <div data-aos="fade-in" data-aos-offset='100' className="p-1">Chief Executive Officer</div>
             <div data-aos="fade-in" data-aos-offset='100' className="p-1">+94 77 3825256</div>
             <div data-aos="fade-in" data-aos-offset='50' className="p-1">ceo@cloudzhotels.com</div>
           </Col>
           <Col xs={12} md={6} className="text-center my-4">
              <div data-aos="fade-in" data-aos-offset='100' className="p-1 f-pf"> <h5><strong>Cloudz Hospitality Management (Pvt) Ltd.</strong></h5></div>
             <div data-aos="fade-in" data-aos-offset='100' className="p-1">63/3/1, Piliyandala Road, </div>
             <div data-aos="fade-in" data-aos-offset='100' className="p-1">Maharagama,</div>
             <div data-aos="fade-in" data-aos-offset='100' className="p-1">Sri Lanka.</div>
             <div data-aos="fade-in" data-aos-offset='100' className="p-1">+94 117 580 600</div>
             <div data-aos="fade-in" data-aos-offset='50' className="p-1">info@cloudzhotels.com</div>
           </Col>
         </Row>
         {/* end of contact information */}
        </Container>
      </React.Fragment>
    );
  }
}

export default MainHome;
