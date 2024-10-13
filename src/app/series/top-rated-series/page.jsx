"use client";
import React, { useEffect, useState } from "react";
import usePaginationStore from "@/store/pagination";
import { getTopRatedSeries } from "@/services/movie";
import TopRatedSeriesContainer from "@/src/containers/top-rated-series";

const UpcomingSeries = () => {
  const [series, setSeries] = useState([]);
  const { page, setTotalPages } = usePaginationStore();

  const fetchSeries = async (page) => {
    try {
      const { results, total_pages } = await getTopRatedSeries(page);
      setTotalPages(total_pages);
      setSeries(results);
    } catch (error) {
      console.error("Error fetching series:", error);
    }
  };

  useEffect(() => {
    fetchSeries(page);
  }, [page]);

  return <TopRatedSeriesContainer series={series} />;
};

export default UpcomingSeries;
