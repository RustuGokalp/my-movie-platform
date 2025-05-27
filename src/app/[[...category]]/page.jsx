import HomeContainer from "@/src/containers/home";
import {
  getPopularMovies,
  getTopRatedMovies,
  getMoviesInTheaters,
  getUpcomingMovies,
  getPopularSeries,
  getAiringTodaySeries,
} from "@/services/movie";

export default async function HomePage({ params }) {
  let selectedCategory;

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { results: inTheaterMovies },
    { results: upcomingMovies },
    { results: popularSeries },
    { results: airingTodaySeries },
  ] = await Promise.all([
    getTopRatedMovies(),
    getPopularMovies(),
    getMoviesInTheaters(),
    getUpcomingMovies(),
    getPopularSeries(),
    getAiringTodaySeries(),
  ]);

  return (
    <HomeContainer
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      inTheaterMovies={inTheaterMovies}
      upcomingMovies={upcomingMovies}
      popularSeries={popularSeries}
      airingTodaySeries={airingTodaySeries}
    />
  );
}
