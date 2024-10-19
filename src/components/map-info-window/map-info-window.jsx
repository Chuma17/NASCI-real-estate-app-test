import React from "react";

import "./map-info-window.css";
import { ReactSVG } from "react-svg";
import Bedrooms from "../../assets/properties/bed.svg";
import SquareFeet from "../../assets/properties/area.svg";
import Bathrooms from "../../assets/properties/bathtub.svg";
import Car from "../../assets/properties/car.svg";
import newsImg from "./news_placeholder.svg";

function MapInfoWindow({ imgUrl, description }) {
  return (
    <div className="map-info-window">
      <div className="map-info-window-img">
        <img src={newsImg} alt="Dummy" />
      </div>
      <div className="map-info-window-content">
        <h3>9789 Riverview CourtTrenton, ON K8V 3S0</h3>
        <p>
          <strong>$2,376,534</strong>
        </p>
        <ul>
          <li>
            <ReactSVG src={Bedrooms} />
            <span>2</span>
          </li>
          <li>
            <ReactSVG src={SquareFeet} /> <span>100</span>
          </li>
          <li>
            <ReactSVG src={Bathrooms} />
            <span>2</span>
          </li>
          <li>
            <ReactSVG src={Car} />
            <span>2</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MapInfoWindow;
