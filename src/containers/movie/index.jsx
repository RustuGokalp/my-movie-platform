import FeaturedMovie from "@/src/components/featured-movie";
import React from "react";

const MovieContainer = ({
  movie,
  params,
  movieCast,
  movieTags,
  similarMovie,
}) => {
  return (
    <FeaturedMovie
      movie={movie}
      isCompact={false}
      params={params}
      movieCast={movieCast}
      movieTags={movieTags}
      similarMovie={similarMovie}
    />
  );
};

export default MovieContainer;
