import React, { useState } from "react";
import "./tabs.css";

export default function Tabs() {
  const [selectedTabs, setSelectedTabs] = useState(1);

  const handleTabChange = (index) => {
    setSelectedTabs(index);
  };

  return (
    <>
      <div className="tabs">
        <div className="tabs-title">
          {" "}
          <span
            className={selectedTabs === 1 ? "tabs-title-active" : ""}
            onClick={() => handleTabChange(1)}
          >
            {" "}
            Key Info
          </span>
          <span
            className={selectedTabs === 2 ? "tabs-title-active" : ""}
            onClick={() => handleTabChange(2)}
          >
            Description
          </span>
          <span
            className={selectedTabs === 3 ? "tabs-title-active" : ""}
            onClick={() => handleTabChange(3)}
          >
            Room
          </span>
          {/* <hr /> */}
        </div>
        <br />
        <div className="tabs-panel">
          {" "}
          <TabsPanel index={selectedTabs} />
        </div>
      </div>
    </>
  );
}

function TabsPanel(props) {
  if (props.index === 1)
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Key Info</th>
              <th></th>
              <th></th>
              <th>
                feet &nbsp;&nbsp;&nbsp;
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>{" "}
                &nbsp;&nbsp;&nbsp; metres
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <h4>Type</h4>
              </td>
              <td>Detached</td>
              <td>
                <h4>Levels</h4>
              </td>
              <td>2 Stories</td>
            </tr>
            <tr>
              <td>
                <h4>Size</h4>
              </td>
              <td>1000-1500 sqft</td>
              <td>
                <h4>Garage</h4>
              </td>
              <td>2 Cars</td>
            </tr>
            <tr>
              <td>
                <h4>Taxes</h4>
              </td>
              <td>$5,000</td>
              <td>
                <h4>Days Listed (Active)</h4>
              </td>
              <td>10 Days</td>
            </tr>
            <tr>
              <td>
                <h4>Lot Sizes</h4>
              </td>
              <td>25 feet x 118.5 feet</td>
              <td>
                <h4>Approx. Age</h4>
              </td>
              <td>51-99 years</td>
            </tr>
            <tr>
              <td>
                <h4>Avg. Price Per Sqft*</h4>
              </td>
              <td>$3,000</td>
            </tr>
          </tbody>
        </table>

        <div style={{ fontSize: ".75rem" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h4>Address</h4>&nbsp;&nbsp;&nbsp;
            <p>9789 Riverview CourtTrenton, ON K8V 3S0</p>
          </div>
          <br />
          <br />
          <p>
            *Average square foot calculated using Size Range provided by listing
            agent.
          </p>
        </div>
      </>
    );
  if (props.index === 2)
    return (
      <>
        <div className="property-detail-description">
          <h4>Description</h4>
          <br />
          <p>
            Terrific, Versatile Family/Investment Property. Thoughtfully Planned
            Quality Renovations. Formal Separate Living & Dining Rooms. Huge
            Kitchen W Farmhouse Sink, Garden Window, Large Breakfast Bar For
            Prep + French Doors To Encl Heated Sunporch W/O To Fenced Yard, Bbq
            Deck. Two 4 Pce Baths. W/I Entry Closet Is Plumbed For Laundry. Up
            To Romantic Sunny Master W Balcony O/L Gardens,2 More Bdrms+3 Pce
            Bath. Lower Flex Income 2 Bed Apt Or Offices W Kitchenette, Large
            Bath & Laundry/Storage
          </p>
          <br />
          <table>
            <thead>
              <tr>
                <th>MLS® Number</th>
                <th>W5863314</th>
                <th>Locker</th>
                <th>Owned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h4>Ensuite Laundry</h4>
                </td>
                <td>-</td>
                <td>
                  <h4>Balcony</h4>
                </td>
                <td>Open</td>
              </tr>
              <tr>
                <td>
                  <h4>Furnished</h4>
                </td>
                <td>-</td>
                <td>
                  <h4>Laundry Level</h4>
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>
                  <h4>Exposure</h4>
                </td>
                <td>£</td>
                <td>
                  <h4>Exterior</h4>
                </td>
                <td>Alum Sliding and Block</td>
              </tr>
              <tr>
                <td>
                  <h4>Garage</h4>
                </td>
                <td>2 Cars</td>
                <td>
                  <h4>Approx. Age</h4>
                </td>
                <td>51-99 years</td>
              </tr>
              <tr>
                <td>
                  <h4>Stories</h4>
                </td>
                <td>6</td>
                <td>
                  <h4>Pets</h4>
                </td>
                <td>Allowed</td>
              </tr>

              <tr>
                <td>
                  <h4>Corp Number</h4>
                </td>
                <td>2432</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>
                  <h3>Included in Maintenance Fee</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h4>Heat </h4>
                </td>
                <td>Yes</td>
                <td>
                  <h4>Hydro</h4>
                </td>
                <td>No</td>
              </tr>
              <tr>
                <td>
                  <h4>Water</h4>
                </td>
                <td>Yes</td>
                <td>
                  <h4>Building Insurance</h4>
                </td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>
                  <h4>Condo Taxes</h4>
                </td>
                <td>-</td>
                <td>
                  <h4>Cable TV</h4>
                </td>
                <td>No</td>
              </tr>
              <tr>
                <td>
                  <h4>Central Air</h4>
                </td>
                <td>Yes</td>
                <td>
                  <h4>Parking Maintenance</h4>
                </td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
          <table>
            <thead>
              <tr>
                <th>
                  <h3>Utilities</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h4>Heat </h4>
                </td>
                <td>Forced Air</td>
                <td>
                  <h4>A/C</h4>
                </td>
                <td>Central Air</td>
              </tr>
              <tr>
                <td>
                  <h4>Heating Fuel</h4>
                </td>
                <td>Gas</td>
              </tr>
            </tbody>
          </table>

          <div className="property-extras">
            <h3>Extras</h3>
            <p>
              Fridge, Stove, Dishwasher, Washer, Dryer, Exhaust Hood, All
              Electric Light Fixtures, All Window Coverings.
            </p>
            <br />
            <span>Listed by REAL BROKERS</span>
            <br />
            <br />
            <p>
              The listing data is provided under copyright by the Toronto Real
              Estate Board. The listing data is deemed reliable but is not
              guaranteed accurate by the Toronto Real Estate Board nor Zoocasa.
            </p>
          </div>
        </div>
      </>
    );
  if (props.index === 3)
    return (
      <>
        <div className="property-rooms">
          <table>
            <thead>
              <tr>
                <th>
                  <h3>Rooms</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <h4>Living: </h4>
                </td>
                <td>Main 11.48 x 11.80 ft</td>
                <td>
                  <h4>Dining:</h4>
                </td>
                <td>Main 11.81 x 13.12 ft</td>
              </tr>
              <tr>
                <td>
                  <h4>Kitchen: </h4>
                </td>
                <td>Main 11.80 x 13.12 ft</td>
                <td>
                  <h4>2nd Bedroom:</h4>
                </td>
                <td>Main 11.81 x 11.81 ft</td>
              </tr>
              <tr>
                <td>
                  <h4>Bedroom: </h4>
                </td>
                <td>Main 8.50 x 8.53 ft</td>
                <td>
                  <h4>3rd Bedroom:</h4>
                </td>
                <td>Main 11.81 x 11.81 ft</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
}
