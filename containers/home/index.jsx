import React from "react";
import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import FeaturedMovies from "@/components/featured-movie";
import Categories from "@/components/categories";

const HomeContainer = () => {
  return (
    <div>
      <FeaturedMovies movie={Movies.results[0]} />
      <Categories categories={Genres.genres} />
    </div>
  );
};

export default HomeContainer;
