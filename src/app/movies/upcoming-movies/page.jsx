"use client";
import React, { useEffect, useState } from "react";
import { getUpcomingMovies } from "@/services/movie";
import usePaginationStore from "@/store/pagination";
import UpcomingMoviesContainer from "@/src/containers/upcoming-movies";

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);
  const { page, setTotalPages } = usePaginationStore();

  const fetchMovies = async (page) => {
    try {
      const { results, total_pages } = await getUpcomingMovies(page);
      setTotalPages(total_pages);
      setMovies(results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  return (
    <>
      <UpcomingMoviesContainer movies={movies} />
    </>
  );
};

export default UpcomingMovies;
