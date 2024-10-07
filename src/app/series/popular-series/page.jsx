"use client";
import React, { useEffect, useState } from "react";
import { getPopularSeries, getCategories } from "@/services/movie";
import usePaginationStore from "@/store/pagination";
import usePopularMovieCategoryStore from "@/store/popularMovieCategory";
import PopularSeriesContainer from "@/src/containers/popular-series";

const PopularSeries = () => {
  const [series, setSeries] = useState([]);
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

  const fetchSeries = async (page) => {
    try {
      const { results, total_pages } = await getPopularSeries(page);
      setTotalPages(total_pages);
      setSeries(results);
    } catch (error) {
      console.error("Error fetching series:", error);
    }
  };

  useEffect(() => {
    fetchSeries(page);
  }, [page]);

  return <PopularSeriesContainer series={series} genres={genres} />;
};

export default PopularSeries;
