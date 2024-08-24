import React from "react";
import FeaturedMovies from "@/components/featured-movie/index";
import Categories from "@/components/categories/index";
import MoviesSection from "@/components/movies-section/index";

const HomeContainer = ({
  popularMovies = [],
  topRatedMovies = [],
  categories = [],
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
    </div>
  );
};

export default HomeContainer;
