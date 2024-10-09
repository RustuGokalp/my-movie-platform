import React from "react";
import SeriesCastContainer from "@/src/containers/seriesCasts";
import { getSerieCast } from "@/services/movie";

const SerieCasts = async ({ params }) => {
  const serieCast = await getSerieCast(params.id);
  return <SeriesCastContainer serieCast={serieCast} />;
};

export default SerieCasts;
