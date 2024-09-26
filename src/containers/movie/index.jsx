import FeaturedMovie from "@/src/components/featured-movie";
import React from "react";

const MovieContainer = ({ movie, params, movieCast }) => {
  return (
    <FeaturedMovie
      movie={movie}
      isCompact={false}
      params={params}
      movieCast={movieCast}
    />
  );
};

export default MovieContainer;
