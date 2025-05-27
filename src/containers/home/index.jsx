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
  topRatedSeries = [],
}) => {
  const mostRatedSeries = topRatedSeries.sort(
    (a, b) => b?.vote_count - a?.vote_count
  );

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
      <MoviesSection title="Upcoming Movies" movies={upcomingMovies} />
      <MoviesSection title="In Theater Movies" movies={inTheaterMovies} />
      <MoviesSection title="Top Rated Movies" movies={topRatedMovies} />
      <MoviesSection title="Top Rated Series" movies={mostRatedSeries} />
    </div>
  );
};

export default HomeContainer;
