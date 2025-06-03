"use client";
import React from "react";
import SeriesSection from "@/src/components/series-section/index";
import FeaturedSerie from "@/src/components/featured-serie/index";
import Categories from "@/src/components/categories/index";

const SeriesContainer = ({
  popularSeries = [],
  topRatedSeries = [],
  categories = [],
  onTheAirSeries = [],
  airingTodaySeries = [],
  selectedCategory,
}) => {
  return (
    <>
      <FeaturedSerie serieDetail={popularSeries[0]} />
      <Categories categories={categories} />
      {selectedCategory?.movies?.length > 0 && (
        <SeriesSection
          title={
            categories.find((category) => category.id == selectedCategory.id)
              ?.name
          }
          series={selectedCategory.movies}
        />
      )}
      <SeriesSection title="Popular Series" series={popularSeries} />
      <SeriesSection title="Top Rated Series" series={topRatedSeries} />
      <SeriesSection title="On The Air Series" series={onTheAirSeries} />
      <SeriesSection title="Airing Today Series" series={airingTodaySeries} />
    </>
  );
};

export default SeriesContainer;
