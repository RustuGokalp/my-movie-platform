"use client";
import React, { useEffect, useState } from "react";
import usePaginationStore from "@/store/pagination";
import { getAiringTodaySeries } from "@/services/movie";
import AiringTodaySeriesContainer from "@/src/containers/airing-today-series";

const AiringTodaySeries = () => {
  const [series, setSeries] = useState([]);
  const { page, setTotalPages } = usePaginationStore();

  const fetchSeries = async (page) => {
    try {
      const { results, total_pages } = await getAiringTodaySeries(page);
      setTotalPages(total_pages);
      setSeries(results);
    } catch (error) {
      console.error("Error fetching series:", error);
    }
  };

  useEffect(() => {
    fetchSeries(page);
  }, [page]);

  return <AiringTodaySeriesContainer series={series} />;
};

export default AiringTodaySeries;
