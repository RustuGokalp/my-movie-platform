import React from "react";
import MoviesSection from "@/src/components/movies-section";
import Categories from "@/src/components/categories/index";

const PopularMoviesContainer = ({ movies = [], genres = [] }) => {
  return (
    <div>
      <Categories categories={genres} />
      <MoviesSection title="Popular Movies" movies={movies} />
    </div>
  );
};

export default PopularMoviesContainer;
