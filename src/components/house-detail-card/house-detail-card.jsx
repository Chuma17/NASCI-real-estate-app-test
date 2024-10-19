import React from "react";
import "./house-detail-card.css";
import house from "./background-img.png";
import { BtnComp } from "../buttons/buttons";
import { ReactSVG } from "react-svg";
import Bedrooms from "../../assets/properties/bed.svg";
import SquareFeet from "../../assets/properties/area.svg";
import Bathrooms from "../../assets/properties/bathtub.svg";
import { useNavigate } from "react-router-dom";

// Pass Color as a prop
const ComponentsHouseDetailCard = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("ddd");
  };
  return (
    <div onClick={handleClick} className="house-detail-card">
      <div className="house-detail-img">
        <img src={house} alt="house" />
      </div>
      <div className="house-details-data">
        <div className="house-details-top">
          <span className="house-details-forsale">For Sale</span>
          <span className="house-details-days">10 Days</span>
        </div>
        <h4>9789 Riverview CourtTrenton, ON K8V 3S0</h4>
        <span>$30 000</span>
        <div className="house-details-info">
          <span className="house-details-bedrooms">
            <ReactSVG src={Bedrooms} />
            &nbsp; &nbsp; <span>2 Bedrooms</span>
          </span>
          <span className="house-details-bathrooms">
            <ReactSVG src={Bathrooms} />
            &nbsp; &nbsp; <span>2 Bathrooms</span>
          </span>
          <span className="house-details-squarefeet">
            <ReactSVG src={SquareFeet} />
            &nbsp; &nbsp; <span>5 square feet</span>
          </span>
        </div>
        <div className="house-details-btns">
          <BtnComp title="Make Enquiry" color="btn-grey" />
          <BtnComp title="View Details" color="btn-black" />
        </div>
      </div>
    </div>
  );
};

export default ComponentsHouseDetailCard;
