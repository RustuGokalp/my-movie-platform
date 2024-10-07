import React from "react";
import MoviesSection from "@/src/components/movies-section";
import Categories from "@/src/components/categories/index";

const PopularSeriesComp = ({ series = [], genres = [] }) => {
  return (
    <div>
      <Categories categories={genres} />
      <MoviesSection title="Popular Series" movies={series} />
    </div>
  );
};

export default PopularSeriesComp;
