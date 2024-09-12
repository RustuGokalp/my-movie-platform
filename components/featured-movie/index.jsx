import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import styles from "./styles.module.css";

const FeaturedMovie = ({ movie = {}, isCompact = true, params = {} }) => {
  const formatRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
  };
  const {
    poster_path,
    runtime,
    title,
    tagline,
    overview,
    original_title,
    original_language,
    genres,
    release_date,
    vote_average,
    vote_count,
  } = movie;

  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{title}</h1>
      {tagline && params.id && <i className={styles.tagLine}>"{tagline}"</i>}
      {original_language != "en" && (
        <h3 className={styles.originalTitle}>
          Original Title: {original_title}
        </h3>
      )}
      <div className={styles.infoWrapper}>
        <div>
          <strong>Release Date: </strong>
          <span>{release_date}</span>
        </div>
        <div>
          <strong>Rating: </strong>
          <span>
            ⭐ {vote_average.toFixed(1)}/10 ({vote_count})
          </span>
        </div>
      </div>
      {params.id && (
        <div className={styles.timeWrapper}>
          <h3>Time: </h3>
          <p className={styles.runTime}> {formatRuntime(runtime)} </p>
        </div>
      )}
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
