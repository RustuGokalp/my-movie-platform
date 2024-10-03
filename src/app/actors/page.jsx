"use client";
import React, { useEffect, useState } from "react";
import ActorsContainer from "@/src/containers/actors";
import usePaginationStore from "@/store/pagination";
import { getActors } from "@/services/movie";

const Actors = () => {
  const [actors, setActors] = useState([]);
  const { page, setTotalPages } = usePaginationStore();

  const fetchActors = async (page) => {
    try {
      const { results, total_pages } = await getActors(page);
      setTotalPages(total_pages);
      setActors(results);
    } catch (error) {
      console.error("Error fetching Actors:", error);
    }
  };

  useEffect(() => {
    fetchActors(page);
  }, [page]);

  return <ActorsContainer actors={actors} />;
};

export default Actors;
