import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

class NavbarDropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dropdown-nav-wrapper">
        <div className="dropdown-left-side">
          <div className="dropdown-nav-link-wrapper">
            <NavLink
              onClick={this.props.handleNavbarClose}
              exact
              to="/"
              activeClassName="dropdown-nav-link-active"
            >
              Home
            </NavLink>
          </div>
          <div className="dropdown-nav-link-wrapper">
            <NavLink
              onClick={this.props.handleNavbarClose}
              exact
              to="/about"
              activeClassName="dropdown-nav-link-active"
            >
              About
            </NavLink>
          </div>
          <div className="dropdown-nav-link-wrapper">
            <NavLink
              onClick={this.props.handleNavbarClose}
              exact
              to="/contact"
              activeClassName="dropdown-nav-link-active"
            >
              Contact
            </NavLink>
          </div>
          <div className="dropdown-nav-link-wrapper">
            <NavLink
              onClick={this.props.handleNavbarClose}
              exact
              to="/products"
              activeClassName="dropdown-nav-link-active"
            >
              Products
            </NavLink>
          </div>
          <div className="dropdown-nav-link-wrapper">
            <NavLink
              onClick={this.props.handleNavbarClose}
              exact
              to="/specials"
              activeClassName="dropdown-nav-link-active"
            >
              Specials
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NavbarDropdown);
