import React from "react";
import Movies from "@/mocks/movies.json";
import Genres from "@/mocks/genres.json";
import FeaturedMovies from "@/components/featured-movie/index";
import Categories from "@/components/categories/index";
import MoviesSection from "@/components/movies-section/index";

const HomeContainer = ({ selectedCategory }) => {
  return (
    <div>
      <FeaturedMovies movie={Movies.results[0]} />
      <Categories categories={Genres.genres} />
      {selectedCategory?.movies?.length > 0 && (
        <MoviesSection
          title={
            Genres.genres.find((category) => category.id == selectedCategory.id)
              ?.name
          }
          movies={selectedCategory.movies}
        />
      )}

      <MoviesSection title="Popular Films" movies={Movies.results} />
    </div>
  );
};

export default HomeContainer;
