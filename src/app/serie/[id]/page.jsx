import SerieContainer from "@/src/containers/serie";
import React from "react";
import {
  getSerieDetail,
  getSerieCast,
  getSerieTag,
  getSimilarSerie,
  getRecommendedSerie,
} from "@/services/movie";

const SeriePage = async ({ params }) => {
  const serieDetail = await getSerieDetail(params?.id);
  const serieCast = await getSerieCast(params?.id);
  const serieTags = await getSerieTag(params?.id);
  const similarSerie = await getSimilarSerie(params?.id);
  const recommendedSerie = await getRecommendedSerie(params?.id);

  return (
    <SerieContainer
      serieDetail={serieDetail}
      params={params}
      serieCast={serieCast}
      serieTags={serieTags}
      similarSerie={similarSerie}
      recommendedSerie={recommendedSerie}
    />
  );
};

export default SeriePage;
