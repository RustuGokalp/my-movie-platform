import React from "react";
import MoviesSection from "@/src/components/movies-section";

const TopRatedMoviesComp = ({ movies }) => {
  return <MoviesSection title="Top Rated Movies" movies={movies} />;
};

export default TopRatedMoviesComp;
