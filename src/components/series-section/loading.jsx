import React from "react";

import Skeleton from "@/src/components/skeleton";
import styles from "./styles.module.css";

const SeriesSectionLoading = () => {
  return (
    <div className={styles.seriesSection}>
      <Skeleton width={128} height={36} />
      <div className={styles.series}>
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} />
          ))}
      </div>
    </div>
  );
};

export default SeriesSectionLoading;
