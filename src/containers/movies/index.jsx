import React from "react";
import MoviesSection from "@/src/components/movies-section/index";
import FeaturedMovies from "@/src/components/featured-movie/index";
import Categories from "@/src/components/categories/index";

const MoviesContainer = ({
  popularMovies = [],
  topRatedMovies = [],
  categories = [],
  inTheaterMovies = [],
  upcomingMovies = [],
  selectedCategory,
}) => {
  return (
    <>
      <FeaturedMovies movie={popularMovies[0]} />
      <Categories categories={categories} />

      {selectedCategory?.movies?.length > 0 && (
        <MoviesSection
          title={
            categories.find((category) => category.id == selectedCategory.id)
              ?.name
          }
          movies={selectedCategory.movies}
        />
      )}
      <MoviesSection title="Upcoming Movies" movies={upcomingMovies} />
      <MoviesSection title="In Theater Movies" movies={inTheaterMovies} />
      <MoviesSection title="Popular Movies" movies={popularMovies} />
      <MoviesSection title="Top Rated Movies" movies={topRatedMovies} />
    </>
  );
};

export default MoviesContainer;
