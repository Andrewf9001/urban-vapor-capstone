import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavigationComponent from "./navigation/navigation-container";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Contact from ".pages/contact";
import Products from ".pages/products";
import Icons from "../helpers/icons";

export default class App extends Component {
  constructor(props) {
    super(props);

    Icons();
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationComponent />

            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/products" component={Products} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
