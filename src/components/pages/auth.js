import React from "react";

import Login from "../auth/login";
import Footer from "../navigation/footer";

export default function() {
  return (
    <div className="auth-wrapper">
      <div className="auth-page-wrapper">
        <div className="auth-left-column" />

        <div className="auth-right-column">
          <Login />
        </div>
      </div>
      <Footer />
    </div>
  );
}
