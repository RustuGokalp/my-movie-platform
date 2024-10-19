import React from "react";
import SeriesSection from "@/src/components/series-section";

const OnTheAirSeriesComp = ({ series = [] }) => {
  return <SeriesSection title="On The Air Series" series={series} />;
};

export default OnTheAirSeriesComp;
