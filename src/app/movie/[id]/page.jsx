import React from "react";
import MovieContainer from "@/src/containers/movie";
import { notFound } from "next/navigation";
import { getMovie, getCast } from "@/services/movie";

const MoviePage = async ({ params }) => {
  const movieDetail = await getMovie(params.id);
  const movieCast = await getCast(params.id);

  if (!movieDetail) {
    notFound();
  }

  return (
    <MovieContainer movie={movieDetail} params={params} movieCast={movieCast} />
  );
};

export default MoviePage;
