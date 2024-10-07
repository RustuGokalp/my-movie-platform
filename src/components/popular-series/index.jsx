import React from "react";
import SeriesSection from "@/src/components/series-section";
import Categories from "@/src/components/categories/index";

const PopularSeriesComp = ({ series = [], genres = [] }) => {
  return (
    <div>
      <Categories categories={genres} />
      <SeriesSection title="Popular Series" series={series} />
    </div>
  );
};

export default PopularSeriesComp;
