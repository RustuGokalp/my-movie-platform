import React from "react";
import FeaturedMovies from "@/src/components/featured-movie/index";
import Categories from "@/src/components/categories/index";
import MoviesSection from "@/src/components/movies-section/index";

const HomeContainer = ({
  popularMovies = [],
  topRatedMovies = [],
  categories = [],
  inTheaterMovies = [],
  upcomingMovies = [],
  selectedCategory,
}) => {
  return (
    <div>
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

      <MoviesSection title="Popular Movies" movies={popularMovies} />
      <MoviesSection title="Top Rated Movies" movies={topRatedMovies} />
      <MoviesSection title="Upcoming Movies" movies={upcomingMovies} />
      <MoviesSection title="In Theater Movies" movies={inTheaterMovies} />
    </div>
  );
};

export default HomeContainer;
