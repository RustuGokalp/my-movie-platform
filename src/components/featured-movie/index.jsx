"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import styles from "./styles.module.css";
import useMovieDetailStore from "@/store/movieDetail";

const FeaturedMovie = ({
  movie = {},
  isCompact = true,
  params = {},
  movieCast = {},
  movieTags = {},
  similarMovie = {},
  recommendedMovie = {},
}) => {
  const setMovieDetail = useMovieDetailStore((state) => state.setMovieDetail);

  const top10Cast = movieCast?.cast
    ?.sort((a, b) => b.popularity - a.popularity)
    ?.slice(0, 10);

  const mostPopularSimilarMovie = similarMovie?.results
    ?.sort((a, b) => b.popularity - a.popularity)
    .slice(0, 10);

  const mostPopularRecommendedMovie = recommendedMovie?.results
    ?.sort((a, b) => b.popularity - a.popularity)
    .slice(0, 10);

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
      {original_language != "en" && (
        <h3 className={styles.originalTitle}>
          Original Title: {original_title}
        </h3>
      )}
      {tagline && params.id && <i className={styles.tagLine}>"{tagline}"</i>}
      {movieTags?.keywords?.length > 0 && (
        <div className={styles.tagWrapper}>
          {movieTags?.keywords?.slice(0, 5).map((tag) => (
            <div key={tag?.id}>
              <p>#{tag?.name?.split(" ")?.join("-")}</p>
            </div>
          ))}
        </div>
      )}
      <div className={styles.infoWrapper}>
        <div>
          <strong>Release Date: </strong>
          <span>{release_date?.split("-")?.reverse()?.join("-")}</span>
        </div>
        {vote_count > 0 && (
          <div>
            <strong>Rating: </strong>
            <span>
              ⭐ {vote_average?.toFixed(1)}/10 ({vote_count})
            </span>
          </div>
        )}
      </div>
      {params.id && runtime > 0 && (
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
                  src={
                    cast?.profile_path
                      ? `https://image.tmdb.org/t/p/original${cast.profile_path}`
                      : cast?.gender == 2
                      ? "/default-profile-man.jpg"
                      : "/default-profile-woman.jpeg"
                  }
                  alt={cast?.name}
                  width={200}
                  height={300}
                  className={styles.castImage}
                />
                <strong className={styles.castName}>{cast?.name}</strong>
                <p className={styles.castCharacter}>{cast?.character}</p>
              </div>
            ))}
            <Link
              href={`/movie/${params.id}/casts`}
              className={styles.showAllCast}
              onClick={() => setMovieDetail(movie)}
            >
              Show All Casts
            </Link>
          </div>
        </>
      )}
      {mostPopularSimilarMovie?.[0] && (
        <>
          <h1>You May Also Like</h1>
          <div className={styles.similarMoviesAreaWrapper}>
            {mostPopularSimilarMovie?.map((movie) => (
              <div className={styles.similarMovieCardWrapper} key={movie?.id}>
                <Link href={`/movie/${movie?.id}`}>
                  <Image
                    unoptimized
                    src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                    alt={movie?.title || "Movie Title"}
                    width={250}
                    height={170}
                    className={styles.similarMoviePoster}
                  />
                  <strong>{movie?.title}</strong>
                  <br />
                  <span>
                    ⭐ {movie?.vote_average.toFixed(1)}/10 ({movie?.vote_count})
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
      {mostPopularRecommendedMovie?.[0] && (
        <>
          <h1>Recommendations</h1>
          <div className={styles.recommendedMoviesAreaWrapper}>
            {mostPopularRecommendedMovie?.map((movie) => (
              <div
                className={styles.recommendedMovieCardWrapper}
                key={movie?.id}
              >
                <Link href={`/movie/${movie?.id}`}>
                  <Image
                    unoptimized
                    src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                    alt={movie?.title || "Movie Title"}
                    width={250}
                    height={170}
                    className={styles.recommendedMoviePoster}
                  />
                  <strong>{movie?.title}</strong>
                  <br />
                  <span>
                    ⭐ {movie?.vote_average.toFixed(1)}/10 ({movie?.vote_count})
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
        <Image
          unoptimized
          src={
            backdrop_path
              ? `https://image.tmdb.org/t/p/original${backdrop_path}`
              : `https://image.tmdb.org/t/p/original${poster_path}`
          }
          alt={title || "Movie Poster"}
          fill
        />
      </div>
    </div>
  );
};

export default FeaturedMovie;
