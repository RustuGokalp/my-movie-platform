import FeaturedSerie from "@/src/components/featured-serie";
import React from "react";

const SerieContainer = ({
  params,
  serieDetail = [],
  serieCast = [],
  serieTags = [],
  similarSerie = [],
  recommendedSerie = [],
}) => {
  return (
    <FeaturedSerie
      serieDetail={serieDetail}
      params={params}
      isCompact={false}
      serieCast={serieCast}
      serieTags={serieTags}
      similarSerie={similarSerie}
      recommendedSerie={recommendedSerie}
    />
  );
};

export default SerieContainer;
