import React from "react";
import Movies from "@/mocks/movies.json";
import FeaturedMovies from "@/components/featured-movie";

const HomeContainer = () => {
  return (
    <div>
      <FeaturedMovies movie={Movies.results[0]} />
    </div>
  );
};

export default HomeContainer;
