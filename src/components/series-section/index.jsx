"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import styles from "./styles.module.css";

const iconStyle = {
  marginRight: "8px",
  fontSize: "20px",
};

const SeriesSection = ({ title, series }) => {
  const [visibleSeries, setVisibleSeries] = useState(10);

  const handleShowMore = () => {
    setVisibleSeries((prevVisibleSeries) => prevVisibleSeries + 10);
  };

  return (
    <div className={styles.seriesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.series}>
        {series?.slice(0, visibleSeries).map((serie) => (
          <div className={styles.serie} key={serie?.id}>
            <Link href={`/serie/${serie?.id}`}>
              <div className={styles.imageWrapper}>
                <Image
                  fill
                  unoptimized
                  alt={serie?.name}
                  src={`https://image.tmdb.org/t/p/original${serie?.poster_path}`}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>

      {visibleSeries < series?.length && (
        <div className={styles.buttonContainer}>
          <button className={styles.showAllButton} onClick={handleShowMore}>
            <FaChevronDown style={iconStyle} /> Show More Series
          </button>
        </div>
      )}
    </div>
  );
};

export default SeriesSection;
