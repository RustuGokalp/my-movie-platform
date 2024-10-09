"use client";
import React, { useEffect, useState } from "react";
import { getPopularSeries, getTVCategories } from "@/services/movie";
import usePaginationStore from "@/store/pagination";
import usePopularSeriesCategoryStore from "@/store/popularSerieCategory";
import PopularSeriesContainer from "@/src/containers/popular-series";

const PopularSeries = () => {
  const [series, setSeries] = useState([]);
  const { page, setTotalPages } = usePaginationStore();

  const { tvGenres, setTvGenres } = usePopularSeriesCategoryStore();
  const fetchCategories = async () => {
    try {
      const { genres } = await getTVCategories();
      setTvGenres(genres);
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

  return <PopularSeriesContainer series={series} genres={tvGenres} />;
};

export default PopularSeries;
