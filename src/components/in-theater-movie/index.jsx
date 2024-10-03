import React from "react";
import MoviesSection from "@/src/components/movies-section";

const InTheaterComp = ({ movies }) => {
  return <MoviesSection title="In Theater Movies" movies={movies} />;
};

export default InTheaterComp;
