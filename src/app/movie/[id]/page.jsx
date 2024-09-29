import React from "react";
import MovieContainer from "@/src/containers/movie";
import { notFound } from "next/navigation";
import {
  getMovie,
  getCast,
  getMovieTags,
  getSimilarMovie,
} from "@/services/movie";

const MoviePage = async ({ params }) => {
  const movieDetail = await getMovie(params.id);
  const movieCast = await getCast(params.id);
  const movieTags = await getMovieTags(params.id);
  const similarMovie = await getSimilarMovie(params.id);

  if (!movieDetail) {
    notFound();
  }

  return (
    <MovieContainer
      movie={movieDetail}
      params={params}
      movieCast={movieCast}
      movieTags={movieTags}
      similarMovie={similarMovie}
    />
  );
};

export default MoviePage;
