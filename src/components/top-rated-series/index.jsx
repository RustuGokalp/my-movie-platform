"use client";
import React from "react";
import SeriesSection from "@/src/components/series-section";

const TopRatedSeriesComp = ({ series = [] }) => {
  return <SeriesSection title="Top Rated Series" series={series} />;
};

export default TopRatedSeriesComp;
