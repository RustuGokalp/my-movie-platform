"use client";
import React, { useEffect, useState } from "react";
import { getTopRatedMovies } from "@/services/movie";
import usePaginationStore from "@/store/pagination";
import TopRatedMoviesContainer from "@/src/containers/top-rated-movies";

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);
  const { page, setTotalPages } = usePaginationStore();
  const fetchMovies = async (page) => {
    try {
      const { results, total_pages } = await getTopRatedMovies(page);
      setTotalPages(total_pages);
      setMovies(results);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);
  return <TopRatedMoviesContainer movies={movies} />;
};

export default TopRatedMovies;
