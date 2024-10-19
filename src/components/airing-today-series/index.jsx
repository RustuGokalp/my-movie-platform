import React from "react";
import SeriesSection from "@/src/components/series-section";

const AiringTodaySeriesComp = ({ series = [] }) => {
  return <SeriesSection title="Airing Today Series" series={series} />;
};

export default AiringTodaySeriesComp;
