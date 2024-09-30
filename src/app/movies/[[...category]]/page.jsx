import React from "react";
import MoviesContainer from "@/src/containers/movies";
import {
  getPopularMovies,
  getTopRatedMovies,
  getCategories,
  getMoviesInTheaters,
  getUpcomingMovies,
  getSingleCategory,
} from "@/services/movie";

const Movies = async ({ params }) => {
  let selectedCategory;

  const [
    { results: topRatedMovies },
    { results: popularMovies },
    { genres: categories },
    { results: inTheaterMovies },
    { results: upcomingMovies },
  ] = await Promise.all([
    getTopRatedMovies(),
    getPopularMovies(),
    getCategories(),
    getMoviesInTheaters(),
    getUpcomingMovies(),
  ]);

  if (params?.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }
  return (
    <MoviesContainer
      popularMovies={popularMovies}
      topRatedMovies={topRatedMovies}
      categories={categories}
      inTheaterMovies={inTheaterMovies}
      upcomingMovies={upcomingMovies}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory : [],
      }}
    />
  );
};

export default Movies;
