import React from "react";
import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import FeaturedMovies from "@/components/featured-movie/index";
import Categories from "@/components/categories/index";
import MoviesSection from "@/components/movies-section/index";

const HomeContainer = () => {
  return (
    <div>
      <FeaturedMovies movie={Movies.results[0]} />
      <Categories categories={Genres.genres} />
      <MoviesSection title="Popular Films" movies={Movies.results} />
    </div>
  );
};

export default HomeContainer;
