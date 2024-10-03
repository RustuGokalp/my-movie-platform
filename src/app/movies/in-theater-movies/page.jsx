"use client";
import React, { useEffect, useState } from "react";
import usePaginationStore from "@/store/pagination";
import InTheaterMoviesContainer from "@/src/containers/in-theater-movies";
import { getMoviesInTheaters } from "@/services/movie";

const InTheaterMovies = () => {
  const [movies, setMovies] = useState([]);
  const { page, setTotalPages } = usePaginationStore();

  const fetchMovies = async (page) => {
    try {
      const { results, total_pages } = await getMoviesInTheaters(page);
      setTotalPages(total_pages);
      setMovies(results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  return <InTheaterMoviesContainer movies={movies} />;
};

export default InTheaterMovies;
