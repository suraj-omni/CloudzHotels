import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { bubble as Menu } from "react-burger-menu";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Menu
            pageWrapId={"app-container"}
            outerContainerId={"page-container"}
          >
            <a id="home" className="menu-item" href="/">
              Home
            </a>

            <a id="contact" className="menu-item" href="/contact">
              Photo Gallery
            </a>
            <a className="menu-item--small" href="">
              About Us
            </a>
            <a className="menu-item--small" href="">
              Contact Us
            </a>
            <NavDropdown title="Our Hotels" id="sidemenudropdown">
              <NavDropdown.Item href="#action/3.1">
                Cloud Sigiriya
              </NavDropdown.Item>
            </NavDropdown>
          </Menu>
        <Navbar bg="light" expand="lg">
          
          <div id="headermenudiv" className="headermenudiv d-inline-flex">
           <span className="align-middle"> <h5>| Menu</h5></span>
            <span id="selecthotelddl" className="align-middle">
              <NavDropdown title="Our Hotels" id="sidemenudropdown1">
              <NavDropdown.Item href="#action/3.1">
                Cloud Sigiriya
              </NavDropdown.Item>
            </NavDropdown></span>
            
          </div>
          
          <Navbar.Brand href="#home" className="ml-auto mr-auto">
            <img
              src="../img/logo-cloudzhotels.png"
              width="150"
              height="52"
              className="d-inline-block align-top"
              alt="Cludz Hotels"
            />
          </Navbar.Brand>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
