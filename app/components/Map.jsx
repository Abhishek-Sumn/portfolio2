import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

export const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-60.0, -52.0, -10],
        center: [20, -25],
        scale: 800
      }}
      style={{width:"100%", height:"70%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#381565"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[77.2090, 28.6139]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "blue",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-10" textAnchor="end" alignmentBaseline="middle" fill="yellow">
          {"New Delhi"}
        </text>
      </Annotation>
     
    </ComposableMap>
  );
};

export default Map;