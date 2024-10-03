"use client";
import React, { useEffect, useState } from "react";
import { getPopularMovies, getCategories } from "@/services/movie";
import usePaginationStore from "@/store/pagination";
import usePopularMovieCategoryStore from "@/store/popularMovieCategory";
import PopularMoviesContainer from "@/src/containers/popular-movies";

const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const { page, setTotalPages } = usePaginationStore();

  const { genres, setGenres } = usePopularMovieCategoryStore();
  const fetchCategories = async () => {
    try {
      const { genres } = await getCategories();
      setGenres(genres);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchMovies = async (page) => {
    try {
      const { results, total_pages } = await getPopularMovies(page);
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
      <PopularMoviesContainer movies={movies} genres={genres} />
    </>
  );
};

export default PopularMovies;
