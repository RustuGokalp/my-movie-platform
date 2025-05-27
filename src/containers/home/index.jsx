import React from "react";
import FeaturedMovies from "@/src/components/featured-movie/index";
import MoviesSection from "@/src/components/movies-section/index";
const HomeContainer = ({
  popularMovies = [],
  topRatedMovies = [],
  inTheaterMovies = [],
  upcomingMovies = [],
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
      <MoviesSection title="Popular" movies={combinedPopularContent} />
      <MoviesSection title="Airing Today Series" movies={airingTodaySeries} />
      <MoviesSection title="Popular Movies" movies={popularMovies} />
      <MoviesSection title="Top Rated Movies" movies={topRatedMovies} />
      <MoviesSection title="Upcoming Movies" movies={upcomingMovies} />
      <MoviesSection title="In Theater Movies" movies={inTheaterMovies} />
    </div>
  );
};

export default HomeContainer;
