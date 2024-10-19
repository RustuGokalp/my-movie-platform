import React from "react";
import OnTheAirSeriesComp from "@/src/components/on-the-air-series";

const OnTheAirSeriesContainer = ({ series = [] }) => {
  return <OnTheAirSeriesComp series={series} />;
};

export default OnTheAirSeriesContainer;
