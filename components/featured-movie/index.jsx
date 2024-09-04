import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

import styles from "./styles.module.css";

const formatRevenue = (value) => {
  let formattedValue;
  let unit;

  switch (true) {
    case value >= 1_000_000_000:
      unit = "B";
      formattedValue = (value / 1_000_000_000).toFixed(1);
      break;
    case value >= 1_000_000:
      unit = "M";
      formattedValue = (value / 1_000_000).toFixed(1);
      break;
    case value >= 1_000:
      unit = "K";
      formattedValue = (value / 1_000).toFixed(1);
      break;
    default:
      unit = "";
      formattedValue = value?.toString();
      break;
  }

  return `${formattedValue}${unit}`;
};

const FeaturedMovie = ({ movie = {}, isCompact = true, params = {} }) => {
  const {
    poster_path,
    title,
    overview,
    original_title,
    genres,
    release_date,
    vote_average,
    vote_count,
    revenue,
  } = movie;

  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{title}</h1>
      <h3 className={styles.originalTitle}>Original Title: {original_title}</h3>
      <div className={styles.infoWrapper}>
        <div>
          <strong>Release Date: </strong>
          <span>{release_date}</span>
        </div>
        <div>
          <strong>Rating: </strong>
          <span>
            {vote_average.toFixed(1)}/10 ({vote_count})
          </span>
        </div>
        {params.id && (
          <div className={styles.revenueWrapper}>
            <strong>Revenue: </strong>
            <span>${formatRevenue(revenue)}</span>
          </div>
        )}
      </div>
      <p
        className={`${styles.overview} ${
          isCompact ? styles.shortOverview : ""
        }`}
      >
        {overview}
      </p>
      <div className={styles.filmCategoryWrapper}>
        {genres?.map((genre, index) => (
          <div key={index} className={styles.category}>
            {genre.name}
          </div>
        ))}
      </div>
      <div className={styles.actionButtons}>
        <Link className={styles.playButton} href={`/movie/${movie.id}`}>
          Play
        </Link>
        <button className={styles.addButton}>
          <FaPlus />
        </button>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill
        />
      </div>
    </div>
  );
};

export default FeaturedMovie;
