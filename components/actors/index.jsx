import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

const Actors = ({ actors = [] }) => {
  return (
    <div className={styles.actorsWrapper}>
      {actors.map((actor) => {
        const {
          name,
          original_name,
          id,
          profile_path,
          known_for_department,
          gender,
          known_for,
        } = actor;

        const movies = known_for.filter(
          (known) => known.media_type === "movie"
        );
        const tvShows = known_for.filter((known) => known.media_type === "tv");

        return (
          <div key={actor.id} className={styles.actorCard}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              width={200}
              height={300}
              className={styles.actorImage}
              alt={name}
              unoptimized
            />
            <div className={styles.cardRightArea}>
              <div>
                <div className={styles.actorName}>
                  <strong>{name}</strong>
                </div>
                {name != original_name && (
                  <div className={styles.originalName}>
                    <strong>Original Name:</strong>
                    <p>{original_name}</p>
                  </div>
                )}
                <div className={styles.gender}>
                  {gender === 2 ? "Male" : "Female"}
                </div>
                <div className={styles.department}>{known_for_department}</div>
                {movies.length > 0 && (
                  <div className={styles.moviesWrapper}>
                    <strong>Movies:</strong>
                    {movies.map((movie, index) => (
                      <div key={index}>{movie.title}</div>
                    ))}
                  </div>
                )}
                {tvShows.length > 0 && (
                  <div className={styles.tvShowsWrapper}>
                    <strong>TV Shows:</strong>
                    {tvShows.map((tv, index) => (
                      <div key={index}>{tv.name}</div>
                    ))}
                  </div>
                )}
              </div>
              <Link href={`/actors/${id}`} className={styles.detailButton}>
                Go To Detail
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Actors;
