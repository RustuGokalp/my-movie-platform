import React, { useState, useEffect } from "react";
import { Button, useMediaQuery } from "@mui/material";
import MoviesSection from "@/src/components/movies-section";

const UpcomingMoviesContainer = ({ movies = [] }) => {
  const [sortedMovies, setSortedMovies] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");
  const isMobile = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    if (movies.length > 0) {
      sortMovies(sortOrder);
    }
  }, [movies]);

  const sortMovies = (order) => {
    setSortOrder(order);
    const sorted = [...movies].sort((a, b) => {
      if (order === "asc") {
        return new Date(a.release_date) - new Date(b.release_date);
      } else {
        return new Date(b.release_date) - new Date(a.release_date);
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
          size={isMobile ? "small" : "medium"}
          variant={sortOrder === "desc" ? "contained" : "outlined"}
          onClick={() => sortMovies("desc")}
        >
          Release Date Descending
        </Button>
        <Button
          size={isMobile ? "small" : "medium"}
          variant={sortOrder === "asc" ? "contained" : "outlined"}
          onClick={() => sortMovies("asc")}
        >
          Release Date Ascending
        </Button>
      </div>
      <MoviesSection title="Upcoming Movies" movies={sortedMovies ?? movies} />
    </div>
  );
};

export default UpcomingMoviesContainer;
