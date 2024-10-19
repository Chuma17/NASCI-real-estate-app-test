import React from "react";
import "./market-trends.css";
import { SearchComp } from "src/components/search-comp/seacrch-comp";
import Notification from "../../../assets/dashboardicons/notification.svg";
import DollarCircle from "../../../assets/dashboardicons/watchlist/dollar-circle.svg";
import Listings from "../../../assets/dashboardicons/watchlist/note.svg";
import Uptrend from "../../../assets/dashboardicons/watchlist/trend-up.svg";
import MessageQuestion from "../../../assets/dashboardicons/watchlist/message-question.svg";
import Activity from "../../../assets/dashboardicons/watchlist/activity.svg";
import { ReactSVG } from "react-svg";
import Dropdown from "src/components/dropdown/dropdown";

// import { Chart as Chartjs } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Select from "src/components/select/select";

const MarketTrends = () => {
  document.title = "Market Trends";

  return (
    <div className="market-trends">
      <SearchComp title="Filter" placeholder="Search" />
      <div className="market_trends_title">
        <span className="lte-font-weight">
          General Analytics &nbsp; &nbsp;
          <strong>Market Trends</strong>
        </span>
        <span className="lte-font-weight">
          <ReactSVG className="svg_icons" src={Notification} />
          Receive Notifications for this market
        </span>
      </div>

      <div className="market_trends_filter">
        <div className="market_trends_element">
          <label htmlFor="">Province</label>
          <br />
          <br />

          <Select />
        </div>
        <div className="market_trends_element">
          <label htmlFor="">Regional Area</label>
          <br />
          <br />
          <Select />
        </div>
        <div className="market_trends_element">
          <label htmlFor="">City</label>
          <br />
          <br />
          <Select />
        </div>
        <div className="market_trends_element">
          <label htmlFor="">Community</label>
          <br />
          <br />
          <Select />
        </div>
        <div className="market_trends_element">
          <label htmlFor="">Property Type</label>
          <br />
          <br />
          {/* <select name="" id="">
            <option value="British Columbia">All property Type</option>
          </select> */}

          <Select />
        </div>
      </div>

      <div className="market_trends_filter_description">
        <div className="market_trends_filter_description_title mt-16">
          {/* <br />
          <br /> */}
          <span className="mb-8">Displaying for: </span>
          {/* <br />
          <br /> */}
          <div className=" space-between">
            {" "}
            <span className="little-text">
              Langley / Brookswood Langley / All Property Types
            </span>
            <span className="lte-font-weight">Last Updated: 10 Jan, 2023</span>
          </div>
        </div>
        <div className="market_trends_filter_description_info">
          <div className="market_trends_filter_description_info_general">
            <h4>General Info</h4>
            <br />
            <span className="lte-font-weight">December 2022</span>
            <br />
            <br />
            <div className="market_trends_filter_description_info_general_details">
              <div className="median_price">
                <ReactSVG src={DollarCircle} />
                <span className="">
                  Median Price <ReactSVG src={MessageQuestion} />
                </span>{" "}
                <br />
                <span className="">
                  $1,500,000 <ReactSVG src={Uptrend} />{" "}
                </span>
              </div>
              <div className="listings_el">
                <ReactSVG src={Listings} />
                <span className="">
                  News Listings <ReactSVG src={MessageQuestion} />
                </span>{" "}
                <br />
                <span>5</span>
              </div>
            </div>
            <div className="market_trends_filter_description_info_marketinfo">
              <div className="market_trends_filter_description_info_marketinfo_title">
                <h4>Market Info</h4>
              </div>
              <div className="market_trends_filter_description_info_marketinfo_details">
                <ReactSVG src={Activity} />
                <span className="">
                  Value Change <ReactSVG src={MessageQuestion} />
                </span>
                <span className="">
                  +3%
                  <ReactSVG
                    beforeInjection={(svg) => {
                      svg.classList.add("svg-class-name");
                    }}
                    src={Uptrend}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="market-trends-langly-bar-chart">
        <div className="market-trends-chart">
          <Bar data={generateRandomData()} />
        </div>
      </div>
    </div>
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
export default MarketTrends;
