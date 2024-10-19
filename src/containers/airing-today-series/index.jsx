import React from "react";
import AiringTodaySeriesComp from "@/src/components/airing-today-series";

const AiringTodaySeriesContainer = ({ series = [] }) => {
  return <AiringTodaySeriesComp series={series} />;
};

export default AiringTodaySeriesContainer;
