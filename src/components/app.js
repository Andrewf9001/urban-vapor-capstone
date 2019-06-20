import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavigationComponent from "./navigation/navigation-container";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Contact from "./pages/contact";
import ELiquid from "./pages/e-liquid";
import Tanks from "./pages/tanks";
import PodSystems from "./pages/pod-systems";
import Accessories from "./pages/accessories";
import StarterKits from "./pages/starter-kits";
import Icons from "../helpers/icons";
import NavbarDropdown from "./navigation/navbar-dropdown";

export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();

    this.state = {
      navDropdown: false
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleNavbarClose = this.handleNavbarClose.bind(this);
  }

  handleNavbarClose() {
    event.preventDefault();
    this.setState({
      navDropdown: false
    });
  }

  handleToggle() {
    this.setState({
      navDropdown: !this.state.navDropdown
    });
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationComponent handleToggle={this.handleToggle} />
            {this.state.navDropdown ? (
              <NavbarDropdown
                handleNavbarClose={this.handleNavbarClose}
                navDropdown={this.state.navDropdown}
              />
            ) : null}
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/e-liquid" component={ELiquid} />
              <Route path="/tanks" component={Tanks} />
              <Route path="/pod-systems" component={PodSystems} />
              <Route path="/accessories" component={Accessories} />
              <Route path="/starter-kits" component={StarterKits} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
