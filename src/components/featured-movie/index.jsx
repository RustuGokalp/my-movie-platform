"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import styles from "./styles.module.css";
import useMovieCastStore from "@/store/movieCast";

const FeaturedMovie = ({
  movie = {},
  isCompact = true,
  params = {},
  movieCast = {},
}) => {
  const setMovieCast = useMovieCastStore((state) => state.setMovieCast);

  const top10Cast = movieCast?.cast
    ?.sort((a, b) => b.popularity - a.popularity)
    ?.slice(0, 10);

  const formatRuntime = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    if (hours === 0) {
      return `${minutes}m`;
    }
    return `${hours}h ${minutes}m`;
  };
  const {
    backdrop_path,
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
        {!params.id && (
          <Link className={styles.goToDetailButton} href={`/movie/${movie.id}`}>
            Go To Detail
          </Link>
        )}
        <button className={styles.addWatchlistButton}>
          <FaPlus />
          <p className={styles.addWatchlistBtnText}>Add To Watchlist</p>
        </button>
        <button className={styles.addFavoritesButton}>
          <FaPlus />
          <p className={styles.addFavoritesBTnText}>Add To Favorites</p>
        </button>
      </div>
      {top10Cast && (
        <>
          <h1>Top Casts</h1>
          <div className={styles.movieCastAreaWrapper}>
            {top10Cast?.map((cast) => (
              <div className={styles.movieCastCardWrapper} key={cast?.id}>
                <Image
                  unoptimized
                  src={`https://image.tmdb.org/t/p/original${cast?.profile_path}`}
                  alt={cast?.name}
                  width={200}
                  height={300}
                  className={styles.castImage}
                />
                <strong className={styles.castName}>{cast?.name}</strong>
                <div className={styles.castCharacter}>{cast?.character}</div>
              </div>
            ))}
            <Link
              href={`/movie/${params.id}/casts`}
              className={styles.showAllCast}
              onClick={() => setMovieCast(movieCast)}
            >
              Show All Casts
            </Link>
          </div>
        </>
      )}
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt={title}
          fill
        />
      </div>
    </div>
  );
};

export default FeaturedMovie;
