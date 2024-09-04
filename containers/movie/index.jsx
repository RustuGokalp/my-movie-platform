import FeaturedMovie from "@/components/featured-movie";
import React from "react";

const MovieContainer = ({ movie, params }) => {
  return <FeaturedMovie movie={movie} isCompact={false} params={params} />;
};

export default MovieContainer;
