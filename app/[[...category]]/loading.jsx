import React from "react";
import FeatureMovieLoading from "@/components/featured-movie/loading";
import CategoriesLoading from "@/components/categories/loading";
import MoviesSectionLoading from "@/components/movies-section/loading";
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
