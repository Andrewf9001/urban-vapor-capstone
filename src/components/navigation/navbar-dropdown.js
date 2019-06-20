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
              to="/e-liquid"
              activeClassName="dropdown-nav-link-active"
            >
              E-Liquid
            </NavLink>
          </div>
          <div className="dropdown-nav-link-wrapper">
            <NavLink
              onClick={this.props.handleNavbarClose}
              to="/tanks"
              activeClassName="dropdown-nav-link-active"
            >
              Tanks
            </NavLink>
          </div>
          <div className="dropdown-nav-link-wrapper">
            <NavLink
              onClick={this.props.handleNavbarClose}
              to="/pod-systems"
              activeClassName="dropdown-nav-link-active"
            >
              Pod Systems
            </NavLink>
          </div>
          <div className="dropdown-nav-link-wrapper">
            <NavLink
              onClick={this.props.handleNavbarClose}
              to="/accessories"
              activeClassName="dropdown-nav-link-active"
            >
              Accessories
            </NavLink>
          </div>
          <div className="dropdown-nav-link-wrapper">
            <NavLink
              onClick={this.props.handleNavbarClose}
              to="/starter-kits"
              activeClassName="dropdown-nav-link-active"
            >
              Starter Kits
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NavbarDropdown);
