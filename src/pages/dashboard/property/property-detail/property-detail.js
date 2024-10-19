import React, { useEffect } from "react";
import "./property-detail.css";
import { SearchComp } from "src/components/search-comp/seacrch-comp";
import { Link } from "react-router-dom";
import NewsImg from "./property_detail.png";
import { ReactSVG } from "react-svg";
import Estimator from "../../../../assets/dashboardicons/calculator.svg";

import Bedrooms from "../../../../assets/properties/bed.svg";
import SquareFeet from "../../../../assets/properties/area.svg";
import Bathrooms from "../../../../assets/properties/bathtub.svg";
import Car from "../../../../assets/properties/car.svg";
import Appraisal from "../../../../assets/properties/appraisal.svg";
import Tabs from "src/components/tabs/tabs";
import { BtnComp } from "src/components/buttons/buttons";
// import MapComp from "src/components/mapComp/mapComp";
// eslint-disable-next-line no-unused-vars
import { Chart as Chartjs } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import MapComp from "src/components/map/map";

const PropertyDetail = () => {
  document.title = "Property Detail";

  return (
    <>
      <div className="property_detail">
        {" "}
        <SearchComp placeholder="Search Listings" title="Filter" />
        <Link className="link_el" to="/property">
          All properties &nbsp; 9789 Riverton CourtTr..{" "}
        </Link>
        <br />
        <img style={{ width: "100%" }} src={NewsImg} alt="home" />
        <div className="property_detail_info">
          <ol>
            <li style={{ fontSize: ".85rem", marginBottom: ".75rem" }}>
              Listed 10 Days ago &bull; For Sale &bull; For Rent
            </li>
            {/* <br /> */}
            <li>
              <h3 className="font-bold text-lg">
                9789 Riverview CourtTrenton, ON K8V 3S0
              </h3>
            </li>
            <br />
            <li>
              <span>
                <strong>$3,000,000</strong> <br /> Listed Price{" "}
              </span>{" "}
              <span>
                <strong>$4,500 </strong>
                <br /> Rent Price
              </span>
              <ReactSVG
                beforeInjection={(svg) => {
                  svg.classList.add("svg-estimator");
                }}
                className="svg_icons"
                src={Estimator}
              />
              &nbsp; View Estimates &nbsp; &nbsp;{" "}
              <small>View Price History</small>
            </li>
            <li>
              <ol>
                <li>
                  <ReactSVG className="svg_icons" src={Bedrooms} />
                  &nbsp; <span>2 Bedrooms</span>
                </li>
                <li>
                  <ReactSVG className="svg_icons" src={Bathrooms} />
                  &nbsp; <span>2 Bathrooms</span>
                </li>
                <li>
                  <ReactSVG className="svg_icons" src={SquareFeet} />
                  &nbsp; <span>1000 - 1500 square feet</span>
                </li>
                <li>
                  <ReactSVG className="svg_icons" src={Car} /> &nbsp;{" "}
                  <span>2 Car Garage</span>
                </li>
              </ol>
            </li>
          </ol>
        </div>
        <div className="property-detail-tabs">
          <div>
            <Tabs />
          </div>
        </div>
        <div className="property-price-history">
          <h4>Price History</h4>
          <br />
          <table style={{ width: "70%" }}>
            <thead>
              <tr>
                <th>List Date</th>
                <th>List Price</th>
                <th>Status</th>
                <th>End Date</th>
                <th>Sold Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>08/05/2023</td>
                <td>$702,000</td>
                <td>For Sale</td>
                <td>-</td>
                <td>Not Sold yet</td>
              </tr>
              <tr>
                <td>08/05/2023</td>
                <td>$702,000</td>
                <td>Terminated</td>
                <td>-</td>
                <td>Not Sold yet</td>
              </tr>
            </tbody>
          </table>
          <br />
          <p className=" little-text">
            *Real Estate boards require that you sign in to see the full details
            of this property. Log in or Sign up to see price history.
          </p>
        </div>
        <div className="property-appraisal">
          <h4>Appraisal</h4>
          <div>
            <ReactSVG
              beforeInjection={(svg) => {
                svg.classList.add("appraisal-svg");
              }}
              src={Appraisal}
            />
            <p>
              Similar properties sold on average for: <strong>$851,403 </strong>
              <br />
              This home is listed <strong>$71,403 </strong> below average sold
              prices for similar properties.
            </p>
          </div>
        </div>
        <div className="property-mortage">
          <span className="">
            <h4>Mortage</h4> &nbsp;&nbsp;
            <p className="little-text">(Buying a home)</p>
          </span>
          <br />
          <form className="mortage-form">
            <div className="property-home-price">
              <label htmlFor="">Home Price</label>
              <input type="text" />
            </div>
            <br />
            <label htmlFor="">Down Payment</label>
            <div className="property-down-payment">
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
            </div>
            <br />
            <div className="property-rate-term">
              <div>
                <label htmlFor="">Rate</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Term </label>
                <input type="select" />
              </div>
            </div>
            <br />
            <br />
            <BtnComp title="Mortgage: $10,987" color="btn-black" />
          </form>
          <br />
          <p className="little-text">
            For more advanced Mortgage rates go to <strong>ratehub.ca</strong>
          </p>
        </div>
        <div className="property-school">
          <h4>Schools</h4>
          <br />
          <p className="little-text">
            The most popular <strong>elementary school</strong> among residents
            in this area is
            <strong> McKee Public School</strong> <br />
            <br />
            The following schools are nearby:
          </p>
          <br />

          <table style={{ width: "70%" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Mckee Public School <br />{" "}
                  <span>English(JK - 8)1.5 km away</span>
                </td>
                <td>3.5/4</td>
              </tr>
              <tr>
                <td>
                  Mckee Public School <br />{" "}
                  <span>English(JK - 8)1.5 km away</span>
                </td>
                <td>3.5/4</td>
              </tr>
              <tr>
                <td>
                  Mckee Public School <br />{" "}
                  <span>English(JK - 8)1.5 km away</span>
                </td>
                <td>3.5/4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="property-sold-comparables">
          <span>
            <strong>Sold Comparables </strong>| Rent Comparables
            <br />
            <br />
            <MapComp size={{ width: "65vw", height: "60vh" }} />
          </span>
        </div>
        <div className="property-demographics">
          <span>
            <strong>Demographics</strong> by Statistics Canada
          </span>
          <br />
          <br />
          <div>
            <p style={{ lineHeight: "1.8rem", width: "100%" }}>
              The following demographic information is based on the
              dissemination area as defined by Statistics Canada. A
              dissemination area contains, on average, approximately 200 – 400
              households and is often referred to as a small neighbourhood.
            </p>
            <br />
            <br />
            <MapComp size={{ width: "65vw", height: "60vh" }} />
          </div>
          {/* <MapComp /> */}

          <table style={{ width: "70%", marginTop: "3rem" }}>
            <thead>
              <tr>
                <th>Statistics Canada: Area #645346543</th>
                <th></th>
                <th></th>
                <th>2016</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Population <br />
                  231
                </td>
                <td>
                  Average Age <br />
                  30.2
                </td>
                <td>
                  Household Average Size <br />
                  2.3
                </td>
              </tr>
              <tr>
                <td>
                  Average Household Income <br />
                  $126,355
                </td>
                <td>
                  Renters <br />
                  10.6%{" "}
                </td>
                <td>
                  Immigrants <br />
                  10.2{" "}
                </td>
              </tr>
              <tr>
                <td>
                  Condos <br />
                  0%
                </td>
                <td>
                  College/University Education <br />
                  64%
                </td>
                <td>
                  Average Price <br />
                  $820,000{" "}
                </td>
              </tr>
              <tr>
                <td>
                  Low Income <br />
                  64%
                </td>
                <td>
                  Not In Labour Force <br />
                  17.71%{" "}
                </td>
                <td>
                  Single <br />
                  32.5%{" "}
                </td>
              </tr>
              <tr>
                <td>
                  Households with Children
                  <br />
                  23%
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="property-chart">
          <Pie data={generateRandomData()} />
        </div>
        <p className="little-text">Source: Statistics Canada - 2016 Census</p>
      </div>
    </>
  );
};

function generateRandomData() {
  const labels = [
    "$0-$29,999",
    "$30,000-$59,999",
    "60,000-$79,999",
    "80,000-$99,999",
    "100,000-$149,999",
    "150,000-$199,999",
    "200,000+",
  ];
  const data = labels.map(() => Math.floor(Math.random() * 100));
  const backgroundColors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#4BC0C0",
    "#9966FF",
    "#FA6364",
    "#32C2EB",
    "#AFCE16",
    "#4AC0C8",
  ];

  return {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: backgroundColors,
      },
    ],
  };
}
export default PropertyDetail;
