import React from "react";
import FeaturedMovies from "@/src/components/featured-movie/index";
import Categories from "@/src/components/categories/index";
import MoviesSection from "@/src/components/movies-section/index";
import PopularSeriesAndFilms from "@/src/components/popular-series-and-films/index";
const HomeContainer = ({
  popularMovies = [],
  topRatedMovies = [],
  categories = [],
  inTheaterMovies = [],
  upcomingMovies = [],
  selectedCategory,
  popularSeries = [],
  airingTodaySeries = [],
}) => {
  const sortedPopularMovies = [...popularMovies].sort(
    (a, b) => b.popularity - a.popularity
  );
  const sortedPopularSeries = [...popularSeries].sort(
    (a, b) => b.popularity - a.popularity
  );

  const combinedPopularContent = [
    ...sortedPopularMovies,
    ...sortedPopularSeries,
  ].sort((a, b) => b.popularity - a.popularity);

  return (
    <div>
      <FeaturedMovies movie={combinedPopularContent[0]} />
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
      <PopularSeriesAndFilms
        title={"Popular"}
        movies={combinedPopularContent}
      />
      <MoviesSection title="Airing Today Series" movies={airingTodaySeries} />
      <MoviesSection title="Popular Movies" movies={popularMovies} />
      <MoviesSection title="Top Rated Movies" movies={topRatedMovies} />
      <MoviesSection title="Upcoming Movies" movies={upcomingMovies} />
      <MoviesSection title="In Theater Movies" movies={inTheaterMovies} />
    </div>
  );
};

export default HomeContainer;
