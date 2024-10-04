import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import MoviesSection from "@/src/components/movies-section";

const TopRatedMoviesComp = ({ movies }) => {
  const [sortedMovies, setSortedMovies] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    if (movies.length > 0) {
      sortMovies(sortOrder);
    }
  }, [movies]);

  const sortMovies = (order) => {
    setSortOrder(order);
    const sorted = [...movies].sort((a, b) => {
      if (order === "asc") {
        return new Date(a?.popularity) - new Date(b?.popularity);
      } else {
        return new Date(b?.popularity) - new Date(a?.popularity);
      }
    });
    setSortedMovies(sorted);
  };
  return (
    <div>
      <div
        style={{
          marginBottom: "16px",
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <Button
          variant={sortOrder === "desc" ? "contained" : "outlined"}
          onClick={() => sortMovies("desc")}
        >
          Popularity Descending
        </Button>
        <Button
          variant={sortOrder === "asc" ? "contained" : "outlined"}
          onClick={() => sortMovies("asc")}
        >
          Popularity Ascending
        </Button>
      </div>
      <MoviesSection title="Top Rated Movies" movies={sortedMovies ?? movies} />
    </div>
  );
};

export default TopRatedMoviesComp;
