import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

const Actors = ({ actors = [] }) => {
  return (
    <div className={styles.actorsWrapper}>
      {actors.map((actor) => {
        const { name, profile_path, known_for_department, gender, known_for } =
          actor;

        const movies = known_for.filter(
          (known) => known.media_type === "movie"
        );
        const tvShows = known_for.filter((known) => known.media_type === "tv");

        return (
          <div key={actor.id} className={styles.actor}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              width={150}
              height={300}
              className={styles.actorImage}
              alt={name}
              unoptimized
            />
            <div>
              <strong>{name}</strong>
              <div>{gender === 2 ? "Male" : "Female"}</div>
              <div>{known_for_department}</div>

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
          </div>
        );
      })}
    </div>
  );
};

export default Actors;
