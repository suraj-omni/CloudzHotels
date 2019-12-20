import React, { Component } from "react";

class CHFooter extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer className="footer  mt-auto py-3">
          <div className="container">
            <div className="footertext">
                <span>Copyright &copy; 2019 All Rights Reserved Cloudz Hotels | Powered by Omni Technologies</span>
                
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default CHFooter;
