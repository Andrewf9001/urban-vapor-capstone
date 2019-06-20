import React, { Component } from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

import Logo from "../../../static/assets/images/placeholder.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  render() {
    return (
      <div className="footer-nav-wrapper">
        <div className="footer-left-side">
          <NavLink to="/" activeClassName="logo-link-active">
            <img src={Logo} alt="Background" />
          </NavLink>
        </div>
        <div className="footer-right-link-wrapper">
          <div className="footer-nav-link-wrapper">
            <NavLink exact to="/" activeClassName="footer-nav-link-active">
              Clouds4Less
            </NavLink>
          </div>
          <div className="footer-nav-link-wrapper">
            <NavLink to="/about" activeClassName="footer-nav-link-active">
              About Us
            </NavLink>
          </div>
          <div className="footer-nav-link-wrapper">
            <NavLink to="/contact" activeClassName="footer-nav-link-active">
              Contact
            </NavLink>
          </div>
          <div className="footer-facebook">
            <FontAwesomeIcon icon={["fab", "facebook-square"]} />
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
