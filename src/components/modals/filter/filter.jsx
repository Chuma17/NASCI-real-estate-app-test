import React from "react";
import "./filter.css";
import RefreshIcon from "./refresh.svg";
import { ReactSVG } from "react-svg";
import CancelIcon from "./close-circle.svg";
import Counter from "../counter/counter";

export default function FilterModal() {
  return (
    <>
      <div className="filter-component">
        <form>
          <div className="filter-header">
            <h3>Filter</h3>{" "}
            <span>
              <ReactSVG src={CancelIcon} />
            </span>
          </div>
          <div className="filter-listing-details">
            <div className="filter-listing-column-1">
              <h4>Listing Type</h4>
              <div className="flex-content">
                <label htmlFor="">
                  <input type="radio" name="listing_type" id="" />
                  <span>Buy</span>
                </label>
                <label htmlFor="">
                  <input type="radio" name="listing_type" id="" />
                  <span>Rent</span>
                </label>
              </div>
              <br />
              <h4>Listing Status</h4>
              <div className="flex-content">
                <label htmlFor="">
                  <input type="radio" name="listing_status" id="" />
                  <span>Active</span>
                </label>
                <label htmlFor="">
                  <input type="radio" name="listing_status" id="" />
                  <span>Sold</span>
                </label>
                <label htmlFor="">
                  <input type="radio" name="listing_status" id="" />
                  <span>Expired</span>
                </label>
              </div>
              <br />
              <br />
              <p style={{ lineHeight: "1.2rem" }}>
                Only displays sold and expired listings for last 12 months
              </p>
              <br />
              <h4>Price</h4>
              <input type="range" name="" id="" />
            </div>
            <div className="filter-listing-column-2">
              <div className="filter-listing-date">
                <h4>Listing Date</h4>
                <input type="date" name="" id="" /> &nbsp;-&nbsp;
                <input type="date" name="" id="" />
              </div>
              <br />
              <div className="filter-listing-beds">
                <h4>Beds</h4>
                <div className="filter-listing-counter">
                  <Counter />
                  <input type="checkbox" name="" id="" />
                  <span>or more</span>
                </div>
              </div>
              <div className="filter-listing-bathroom">
                <h4>Bathrooms</h4>
                <div className="filter-listing-counter">
                  <Counter />
                  <input type="checkbox" name="" id="" />
                  <span>or more</span>
                </div>
              </div>
              <div className="filter-listing-parking">
                <h4>Parking</h4>
                <div className="filter-listing-counter">
                  <Counter />
                  <input type="checkbox" name="" id="" />
                  <span>or more</span>
                </div>
              </div>

              <br />
            </div>
            <div className="filter-listing-column-3">
              <h4>Amenities</h4>
              <div className="amenities-input-grid">
                <div className="flex-content">
                  <label htmlFor="">
                    <input type="checkbox" name="" id="" />
                    <span>Garage</span>
                  </label>
                  <label htmlFor="">
                    <input type="checkbox" name="" id="" />
                    <span>Open House</span>
                  </label>
                </div>
                <br />
                <div className="flex-content">
                  <label htmlFor="">
                    <input type="checkbox" name="" id="" />
                    <span>Pool</span>
                  </label>
                  <label htmlFor="">
                    <input type="checkbox" name="" id="" />
                    <span>Waterfront</span>
                  </label>
                </div>
                <br />
                <label htmlFor="">
                  <input type="checkbox" name="" id="" />
                  <span>Fireplace</span>
                </label>
              </div>
            </div>
          </div>
          <div className="filter-property-details">
            <div className="filter-property-details-column-1">
              <h4>Property Type</h4>
              <select name="" id="">
                <option value="">Home</option>
              </select>
              <br />
              <br />
              <br />
              <h4>Square Feet</h4>
              <input placeholder="Min" min={1000} type="number" />
              <input placeholder="Max" min={1000} type="number" name="" id="" />
            </div>
            <div className="filter-property-details-column-2">
              <h4>House Filter</h4>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />
                <span>Single Family</span>
              </label>
              <br />
              <label htmlFor="">
                <input type="checkbox" name="" id="" />
                <span>Single family with basement</span>
              </label>
              <br />
              <div className="flex-content">
                <label htmlFor="">
                  <input type="checkbox" name="" id="" />
                  <span>Duplex</span>
                </label>
                <br />
                <label htmlFor="">
                  <input type="checkbox" name="" id="" />
                  <span>Triplex</span>
                </label>
              </div>
              <br />
              <label htmlFor="">
                <input type="checkbox" name="" id="" />
                <span>Fourplex+</span>
              </label>
            </div>
          </div>

          <div className="filter-property-details-btns">
            <button type="button">
              <ReactSVG src={RefreshIcon} /> <span>Reset Filter</span>
            </button>
            <button type="button">Reciece Notification For Search Match</button>
            <button type="button">Save Search</button>
            <button className="apply-filter" type="button">
              Apply Filters
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
