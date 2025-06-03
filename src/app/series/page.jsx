import React from "react";
import SeriesContainer from "@/src/containers/series/index";
import {
  getPopularSeries,
  getTopRatedSeries,
  getTVCategories,
  getOnTheAirSeries,
  getAiringTodaySeries,
  getSingleCategory,
} from "@/services/movie";

const Series = async ({ params }) => {
  let selectedCategory;

  const [
    { results: topRatedSeries },
    { results: popularSeries },
    { genres: categories },
    { results: onTheAirSeries },
    { results: airingTodaySeries },
  ] = await Promise.all([
    getPopularSeries(),
    getTopRatedSeries(),
    getTVCategories(),
    getOnTheAirSeries(),
    getAiringTodaySeries(),
  ]);

  if (params?.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }
  return (
    <SeriesContainer
      popularSeries={popularSeries}
      topRatedSeries={topRatedSeries}
      categories={categories}
      onTheAirSeries={onTheAirSeries}
      airingTodaySeries={airingTodaySeries}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory : [],
      }}
    />
  );
};
export default Series;
