import React from "react";
import "./watchlist.css";
import { SearchComp } from "src/components/search-comp/seacrch-comp";
import ComponentsHouseDetailCard from "../../../components/house-detail-card/house-detail-card";

const Watchlist = () => {
  document.title = "Watch List";

  return (
    <div className="watchlist_page">
      <SearchComp title="Filter" placeholder="Search Address keywords" />
      <div className="watchlist_page_title">
        <strong>Watchlist</strong> Notifications
      </div>
      <br />
      <span>
        <strong>WatchList</strong>(7 Listings)
      </span>
      <div className="watchlist_page_details">
        {[2, 2, 2, 2, 2, 2, 2].map((el, index) => {
          return <ComponentsHouseDetailCard key={index} />;
        })}
      </div>
    </div>
  );
};

export default Watchlist;
