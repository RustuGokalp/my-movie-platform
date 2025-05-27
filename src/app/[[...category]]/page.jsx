import HomeContainer from "@/src/containers/home";
import {
  getPopularMovies,
  getTopRatedMovies,
  getMoviesInTheaters,
  getUpcomingMovies,
  getPopularSeries,
  getAiringTodaySeries,
  getTopRatedSeries,
} from "@/services/movie";

export default async function HomePage() {
  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { results: inTheaterMovies },
    { results: upcomingMovies },
    { results: popularSeries },
    { results: airingTodaySeries },
    { results: topRatedSeries },
  ] = await Promise.all([
    getTopRatedMovies(),
    getPopularMovies(),
    getMoviesInTheaters(),
    getUpcomingMovies(),
    getPopularSeries(),
    getAiringTodaySeries(),
    getTopRatedSeries(),
  ]);

  return (
    <HomeContainer
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      inTheaterMovies={inTheaterMovies}
      upcomingMovies={upcomingMovies}
      popularSeries={popularSeries}
      airingTodaySeries={airingTodaySeries}
      topRatedSeries={topRatedSeries}
    />
  );
}
