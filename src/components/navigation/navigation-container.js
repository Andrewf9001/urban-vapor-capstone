import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

import NavbarDropdown from "./navbar-dropdown";
import Logo from "../../../static/assets/images/placeholder.png";

class NavigationComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-wrapper">
        <div className="left-side">
          <div className="nav-link-wrapper">
            <NavLink exact to="/" activeClassName="nav-link-active">
              Home
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink exact to="/e-liquid" activeClassName="nav-link-active">
              E-Liquid
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink to="/tanks" activeClassName="nav-link-active">
              Tanks
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink exact to="/pod-systems" activeClassName="nav-link-active">
              Pod Systems
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink exact to="/accessories" activeClassName="nav-link-active">
              Accessories
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink exact to="/starter-kits" activeClassName="nav-link-active">
              Starter Kits
            </NavLink>
          </div>
        </div>
        <div className="nav-hamburger">
          <button className="btn" onClick={this.props.handleToggle}>
            <FontAwesomeIcon icon="bars" />
          </button>
        </div>
        <div className="right-side">
          <NavLink to="/" activeClassName="logo-link-active">
            <img src={Logo} alt="Background" />
          </NavLink>
        </div>
      </div>
    );
  }
}

export default withRouter(NavigationComponent);
