import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
  return (
    <div className="contact-bullet-points">
      <div className="bullet-point-group">
        <div className="bullet-wrapper">
          <FontAwesomeIcon className="icon" icon="phone" />
          <div className="text">888-888-8888</div>
        </div>
      </div>

      <div className="bullet-point-group">
        <div className="bullet-wrapper">
          <FontAwesomeIcon className="icon" icon="envelope" />
          <div className="text">urban@sample.com</div>
        </div>
      </div>
      <div className="bullet-point-group">
        <div className="bullet-wrapper">
          <FontAwesomeIcon className="icon" icon="map-marked-alt" />
          <div className="text">Bountiful, UT 123 s 1234 e</div>
        </div>
      </div>
    </div>
  );
}
