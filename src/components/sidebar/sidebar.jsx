import React from "react";
import "./sidebar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Overview from "../../assets/dashboardicons/overview.svg";
import Property from "../../assets/dashboardicons/buildings.svg";
import WatchList from "../../assets/dashboardicons/eye.svg";
import MarketTrends from "../../assets/dashboardicons/diagram.svg";
import Map from "../../assets/dashboardicons/map.svg";
import News from "../../assets/dashboardicons/document-text.svg";
import Estimator from "../../assets/dashboardicons/calculator.svg";
import Setting from "../../assets/dashboardicons/setting.svg";
import HelpSupport from "../../assets/dashboardicons/message-question.svg";
import { ReactSVG } from "react-svg";
import { useLocation } from "react-router-dom";
import Profile from "../profile/profile";

const Sidebar = ({ children }) => {
  const route = useLocation().pathname.split("/").slice(1);
  const menu = [
    { route: "overview", title: "Overview", icon: Overview },
    { route: "property", title: "Property", icon: Property },
    { route: "watch-list", title: "Watch List", icon: WatchList },
    { route: "market-trends", title: "Market Trends", icon: MarketTrends },
    { route: "map", title: "Map", icon: Map },
    { route: "news", title: "News", icon: News },
    { route: "estimator", title: "Estimator", icon: Estimator },
  ];
  return (
    <>
      <div style={{ display: "flex", position: "relative" }}>
        <div className="sidebar">
          <div className="sidebar_logo">
            <img src={logo} alt="Logo file" />
          </div>

          <div className="sidebar_details">
            <ul>
              {menu.map((el, index) => {
                let isActive = el.route === route[1];
                return (
                  <li key={index}>
                    <Link
                      className={
                        isActive ? "sidebar_active link_el" : "link_el"
                      }
                      to={`/dashboard/${el.route}`}
                    >
                      <ReactSVG className="svg_icons" src={el.icon} />
                      <span>{el.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="settings_profile">
            <ul>
              <li>
                <Link className="link_el" to="/dashboard/settings">
                  <ReactSVG className="svg_icons" src={Setting} />
                  <span>Settings</span>
                </Link>
              </li>
              <li>
                <Link className="link_el" to="/dashboard/help-support">
                  <ReactSVG className="svg_icons" src={HelpSupport} />
                  <span>Help & Support</span>
                </Link>
              </li>
              <Profile />
            </ul>
          </div>
        </div>
      </div>
      <div className="sidebar-details">{children}</div>
    </>
  );
};

export default Sidebar;
