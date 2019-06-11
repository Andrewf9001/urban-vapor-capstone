import React from "react";

import BrandLogo from "../../../static/assets/images/c4lnowarning.png";
import Logo from "../../../static/assets/images/c4lmenu1.jpg";
import Logo2 from "../../../static/assets/images/c4lmenu2.jpg";

export default function() {
  return (
    <div className="homepage-wrapper">
      <div className="urban-home">
        <img src={BrandLogo} alt="Logo" />
      </div>
      <div className="cloud-menus">
        <div className="cloud-menu-one">
          <img src={Logo} alt="Background" />
        </div>

        <div className="cloud-menu-two">
          <img src={Logo2} alt="Background" />
        </div>
      </div>
    </div>
  );
}
