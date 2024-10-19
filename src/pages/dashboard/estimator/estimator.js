import React from "react";
import "./estimator.css";
import { BtnComp } from "../../../components/buttons/buttons";
import Location from "../../../assets/dashboardicons/location.svg";
import { ReactSVG } from "react-svg";

const Estimator = () => {
  document.title = "Estimator";

  return (
    <div className="estimator">
      <span className="estimates_title">Estimates</span>
      <h2>
        Enter your address and get accurate estimates based on our <br />
        <span>
          <em>~ variometrics</em>
        </span>
      </h2>
      <form className="get-estimates">
        <label htmlFor="">Your Address</label>
        <br />
        <ReactSVG
          beforeInjection={(svg) => {
            svg.classList.add("estimates-location-icon");
          }}
          src={Location}
        />
        <input
          type="text"
          placeholder="Type Address or click icon to select from map"
        />
        <BtnComp title="Get Estimates" color="btn-black" />
      </form>
    </div>
  );
};

export default Estimator;
