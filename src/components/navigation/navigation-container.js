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
            <NavLink exact to="/about" activeClassName="nav-link-active">
              About
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink exact to="/contact" activeClassName="nav-link-active">
              Contact
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink exact to="/products" activeClassName="nav-link-active">
              Products
            </NavLink>
          </div>
          <div className="nav-link-wrapper">
            <NavLink exact to="/specials" activeClassName="nav-link-active">
              Specials
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
