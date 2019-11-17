import React from "react";

import Login from "../auth/login";
import Logo from "../../../static/assets/images/store-images/counter-backdrop.png";
import Footer from "../navigation/footer";

export default function() {
  return (
    <div className="auth-wrapper">
      <div className="auth-page-wrapper">
        <div className="auth-left-column">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="auth-right-column">
          <Login />
        </div>
      </div>
      <Footer />
    </div>
  );
}
