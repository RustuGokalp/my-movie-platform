import React from "react";
import MovieContainer from "@/containers/movie";
import Movies from "@/mocks/movies.json";

const MoviePage = ({ params }) => {
  const movieDetail = Movies.results.find((movie) => movie.id == params.id);

  return <MovieContainer movie={movieDetail} />;
};

export default MoviePage;
