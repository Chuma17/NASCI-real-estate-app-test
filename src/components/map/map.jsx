// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useRef, useState } from "react";
// import "./map.css";
// import { Wrapper } from "@googlemaps/react-wrapper";
// import { createRoot } from "react-dom/client";
// import { InfoWindow } from "@react-google-maps/api";
// import MapInfoWindow from "src/components/map-info-window/map-info-window";
// import { useNavigate } from "react-router-dom";

// const mapOptions = {
//   mapId: process.env.REACT_APP_GOOGLE_MAPS_ID,
//   center: { lat: 51.505, lng: -0.09 },
//   zoom: 15,
//   // disableDefaultUI: true,
// };

// const markers = [
//   {
//     id: 1,
//     position: { lat: 51.505, lng: -0.09, altitude: 8 },
//     content: "<h3>Marker 1</h3><p>This is Marker 1.</p>",
//   },
//   {
//     id: 2,
//     position: { lat: 51.6, lng: -0.2 },
//     content: "<h3>Marker 2</h3><p>This is Marker 2.</p>",
//   },
//   {
//     id: 3,
//     position: { lat: 51.5, lng: -0.1 },
//     content: "<h3>Marker 1</h3><p>This is Marker 1.</p>",
//   },
//   {
//     id: 4,
//     position: { lat: 51.6, lng: -0.2 },
//     content: "<h3>Marker 2</h3><p>This is Marker 2.</p>",
//   },
// ];
// const MapComp = (props) => {
//   const [mapSize, setMapSize] = useState(props.size);
//   useEffect(() => {
//     if (props.size == null) {
//       setMapSize({ width: "75vw", height: "80vh" });
//     }
//   }, []);
//   return (
//     <Wrapper
//       apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
//       version="beta"
//       libraries={["marker"]}
//     >
//       <CustomMap size={mapSize} />
//     </Wrapper>
//   );
// };

// function CustomMap(props) {
//   const [map, setMap] = useState();
//   const [activeMarker, setActiveMarker] = useState(null);
//   const handleSetActiveMarker = (data) => {
//     setActiveMarker(data);
//   };
//   const ref = useRef();

//   useEffect(() => {
//     setMap(new window.google.maps.Map(ref.current, mapOptions));
//     console.log(activeMarker);
//   }, []);

//   return (
//     <>
//       <div ref={ref} id="map" style={props.size} />
//       {/* IN ORDER TO CHANGE THE DATA DISPLAYED, USE SETSTATE TO CHANGE THE DATA COMING FROM THE API */}

//       {map ? (
//         markers.map((marker, index) => (
//           <div key={index}>
//             <MarkerComp
//               setActiveMarker={handleSetActiveMarker}
//               marker={marker}
//               map={map}
//             />
//             {activeMarker === marker && map && (
//               <>
//                 <InfoWindow
//                   position={marker.position}
//                   options={{
//                     maxWidth: 200,
//                     pixelOffset: { width: 0, height: -30 },
//                     zIndex: 1000,
//                   }}
//                   onCloseClick={() => setActiveMarker(null)}
//                   map={map}
//                 >
//                   <div>
//                     This is the info window {marker.content}
//                     {console.log(map)}
//                   </div>
//                 </InfoWindow>
//               </>
//             )}
//           </div>
//         ))
//       ) : (
//         <></>
//       )}
//     </>
//   );
// }

// function MarkerComp({ map, marker, setActiveMarker }) {
//   const markerRef = useRef();
//   const rootRef = useRef();
//   const setActiveMarkerClick = () => {
//     setActiveMarker(marker);
//   };
//   const navigate = useNavigate();
//   useEffect(() => {
//     let markerContainer = document.createElement("div");
//     if (!rootRef.current || !markerRef.current) {
//       rootRef.current = createRoot(markerContainer);

//       markerRef.current = new window.google.maps.marker.AdvancedMarkerView({
//         position: marker.position,
//         content: markerContainer,
//         map,
//         collisionBehavior: "OPTIONAL_AND_HIDES_LOWER_PRIORITY",
//       });
//     }

//     // markerRef.current.map = map;
//     markerRef.current.position = marker.position;
//     markerRef.current.addEventListener("gmp-click", () => {
//       console.log("I am at the marker ref");
//       // Pass the ID's here
//       navigate("/dashboard/property/ll");

//       setActiveMarkerClick();
//     });
//     // Conditionally displays markers according to zoom level
//     map.addListener("zoom_changed", () => {
//       const zoom = map.getZoom();
//       if (zoom < 14) markerRef.current.map = null;
//       if (zoom > 14) markerRef.current.map = map;
//     });

//     // This updates the marker if there are changes in the MAP
//     rootRef.current.render(
//       <>
//         <MapInfoWindow />
//       </>
//     );
//   }, [map, markerRef, marker.position]);
//   // return <></>;
// }

// export default MapComp;

// -------------------------------------------------------------------------------------------------------------------
// import React, { useState } from "react";
// import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
// import { useLoadScript } from "@react-google-maps/api";
// import MapInfoWindow from "src/components/map-info-window/map-info-window";

// const markers = [
//   {
//     id: 1,
//     name: "Chicago, Illinois",
//     position: { lat: 41.881832, lng: -87.623177 },
//   },
//   {
//     id: 2,
//     name: "Denver, Colorado",
//     position: { lat: 39.739235, lng: -104.99025 },
//   },
//   {
//     id: 3,
//     name: "Los Angeles, California",
//     position: { lat: 34.052235, lng: -118.243683 },
//   },
//   {
//     id: 4,
//     name: "New York, New York",
//     position: { lat: 40.712776, lng: -74.005974 },
//   },
// ];

// function MapComp() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Add your API key
//   });
//   const [activeMarker, setActiveMarker] = useState(null);

//   const handleActiveMarker = (marker) => {
//     if (marker === activeMarker) {
//       return;
//     }
//     setActiveMarker(marker);
//   };

//   const handleOnLoad = (map) => {
//     const bounds = new window.google.maps.LatLngBounds();
//     markers.forEach(({ position }) => bounds.extend(position));
//     map.fitBounds(bounds);
//   };

//   return isLoaded ? (
//     <GoogleMap
//       onLoad={handleOnLoad}
//       onClick={() => setActiveMarker(null)}
//       mapContainerStyle={{ width: "75vw", height: "80vh" }}
//     >
//       {markers.map(({ id, name, position }) => (
//         <Marker
//           key={id}
//           position={position}
//           onClick={() => handleActiveMarker(id)}
//         >
//           {activeMarker === id ? (
//             <InfoWindow
//               options={{
//                 maxWidth: 200,
//                 pixelOffset: { width: 0, height: -30 },
//                 zIndex: 1000,
//               }}
//               onCloseClick={() => setActiveMarker(null)}
//             >
//               <MapInfoWindow />
//             </InfoWindow>
//           ) : null}
//         </Marker>
//       ))}
//     </GoogleMap>
//   ) : (
//     <></>
//   );
// }

// export default MapComp;

// -----------------------------------------------------------------------------------------------------------------------------------------------

import React, { useState } from "react";
import Lottie from "lottie-react";
import LoadingMap from "src/pages/loading_animation.json";

import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import MapInfoWindow from "../map-info-window/map-info-window";
const markers = [
  {
    id: 1,
    name: "Location 1",
    position: { lat: 40.713, lng: -74.006 },
  },
  {
    id: 2,
    name: "Location 2",
    position: { lat: 40.715, lng: -74.01 },
  },
  {
    id: 3,
    name: "Location 3",
    position: { lat: 40.71, lng: -74.002 },
  },
  {
    id: 4,
    name: "New York, New York",
    position: { lat: 40.712776, lng: -74.005974 },
  },
];

const center = { lat: 40.712776, lng: -74.005974 };

function Map(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Add your API key
  });
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const [activeMarker, setActiveMarker] = useState(null);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={props.size}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markers.map(({ id, name, position }) => (
        <Marker
          onClick={() => setActiveMarker(id)}
          key={id}
          position={position}
          title={name}
          map={map}
        >
          {activeMarker === id && (
            <InfoWindow
              onCloseClick={() => setActiveMarker(null)}
              position={position}
            >
              <MapInfoWindow />
            </InfoWindow>
          )}
        </Marker>
      ))}
      <></>
    </GoogleMap>
  ) : (
    <Lottie
      className="map_loading_animation"
      animationData={LoadingMap}
      loop={true}
    />
  );
}

export default React.memo(Map);
