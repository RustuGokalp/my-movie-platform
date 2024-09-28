import MovieCastsContainer from "@/src/containers/movieCasts";
import React from "react";
import { getCast } from "@/services/movie";

const MovieCastsPage = async ({ params }) => {
  const movieCast = await getCast(params.id);
  return <MovieCastsContainer movieCast={movieCast} />;
};

export default MovieCastsPage;
