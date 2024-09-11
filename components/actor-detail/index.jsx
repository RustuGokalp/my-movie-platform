"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

const ActorDetail = ({ actorDetail }) => {
  const [actorId, setActorId] = useState(null);
  const [knownFor, setKnownFor] = useState([]);
  useEffect(() => {
    const actorsJobs = JSON.parse(localStorage.getItem("actorData"));
    if (actorsJobs) {
      setActorId(actorsJobs.id);
      setKnownFor(actorsJobs.known_for);
    }
  }, []);

  const {
    adult,
    also_known_as,
    biography,
    birthday,
    deathday,
    gender,
    homepage,
    id,
    imdb_id,
    known_for_department,
    name,
    place_of_birth,
    popularity,
    profile_path,
  } = actorDetail;
  return (
    <div>
      <div className={styles.actorDetailWrapper}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          className={styles.actorImage}
          width={400}
          height={600}
          alt={name}
          unoptimized
        />
        <div>
          <h1>{name}</h1>
          <h3>{known_for_department}</h3>
          <div>{biography}</div>
        </div>
      </div>
      <h1>Known For</h1>
      <div className={styles.actorsJobs}>
        {knownFor.map((film) => (
          <div className={styles.filmCardWrapper}>
            <Link href={`/movie/${film.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                width={200}
                height={300}
                className={styles.filmPoster}
                alt={name}
                unoptimized
              />
            </Link>
            <div className={styles.filmDetail}>
              <div className={styles.filmTitle}>
                <strong>{film.title}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorDetail;
