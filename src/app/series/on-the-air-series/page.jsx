"use client";
import React, { useEffect, useState } from "react";
import usePaginationStore from "@/store/pagination";
import { getOnTheAirSeries } from "@/services/movie";
import OnTheAirSeriesContainer from "@/src/containers/on-the-air-series";
const OnTheAirSeries = () => {
  const [series, setSeries] = useState([]);
  const { page, setTotalPages } = usePaginationStore();

  const fetchSeries = async (page) => {
    try {
      const { results, total_pages } = await getOnTheAirSeries(page);
      setTotalPages(total_pages);
      setSeries(results);
    } catch (error) {
      console.error("Error fetching series:", error);
    }
  };

  useEffect(() => {
    fetchSeries(page);
  }, [page]);

  return <OnTheAirSeriesContainer series={series} />;
};

export default OnTheAirSeries;
