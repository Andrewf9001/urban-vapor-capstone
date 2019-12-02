import React, { Component } from "react";
import axios from "axios";

import Footer from "../navigation/footer";
import BrandLogo from "../../../static/assets/images/c4lnowarning.png";
import Logo from "../../../static/assets/images/clouds4less-menu.png";
import Logo2 from "../../../static/assets/images/clouds4less-menu.png";

export default class Homepage extends Component {
  constructor() {
    super();

    this.state = {
      cloud_items: []
    };
  }

  // componentDidMount() {
  //   axios.get("https://urban-vapor-api.herokuapp.com/clouds").then(response => {
  //     console.log(response);
  //     this.setState({ cloud_items: response.data });
  //   });
  // }

  render() {
    return (
      <div className="homepage-wrapper">
        <div className="urban-home">
          <img src={BrandLogo} alt="Logo" />
        </div>
        <div className="cloud-menus">
          <img src={Logo} alt="Logo" />
          <img src={Logo2} alt="Logo2" />
          {/* <ul>
            {this.state.cloud_items.map(cloud_items => (
              <li>{cloud_items.flavors}</li>
            ))}
          </ul> */}
        </div>
        <Footer />
      </div>
    );
  }
}
