import React from "react";
import FeatureMovieLoading from "@/src/components/featured-movie/loading";
import CategoriesLoading from "@/src/components/categories/loading";
import MoviesSectionLoading from "@/src/components/movies-section/loading";
const Loading = () => {
  return (
    <div>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
    </div>
  );
};

export default Loading;
