import PopularSeriesComp from "@/src/components/popular-series";
import React from "react";

const PopularSeriesContainer = ({ series = [], genres = [] }) => {
  return <PopularSeriesComp series={series} genres={genres} />;
};

export default PopularSeriesContainer;
