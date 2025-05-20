import HomeContainer from "@/src/containers/home";
import {
  getSingleCategory,
  getPopularMovies,
  getTopRatedMovies,
  getCategories,
  getMoviesInTheaters,
  getUpcomingMovies,
  getPopularSeries,
} from "@/services/movie";

export default async function HomePage({ params }) {
  let selectedCategory;

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
    { results: inTheaterMovies },
    { results: upcomingMovies },
    { results: popularSeries },
  ] = await Promise.all([
    getTopRatedMovies(),
    getPopularMovies(),
    getCategories(),
    getMoviesInTheaters(),
    getUpcomingMovies(),
    getPopularSeries(),
  ]);

  if (params?.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }
  return (
    <HomeContainer
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      categories={categories}
      inTheaterMovies={inTheaterMovies}
      upcomingMovies={upcomingMovies}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory : [],
      }}
      popularSeries={popularSeries}
    />
  );
}
