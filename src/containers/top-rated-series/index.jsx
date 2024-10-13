import React from "react";
import TopRatedSeriesComp from "@/src/components/top-rated-series";

const UpcomingSeriesContainer = ({ series = [] }) => {
  return <TopRatedSeriesComp series={series} />;
};

export default UpcomingSeriesContainer;
