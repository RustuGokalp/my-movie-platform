import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const ActorDetail = ({ actorDetail, actorOriginalNameAndJobs }) => {
  const { original_name, known_for } = actorOriginalNameAndJobs;
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
          {name != original_name && (
            <div className={styles.originalNameWrapper}>
              <h3>Original Name:</h3>
              <h2>{original_name}</h2>
            </div>
          )}
          <h3>{known_for_department}</h3>
          <div>{biography}</div>
        </div>
      </div>
      <div className={styles.knownForWrapper}>
        <h1 className={styles.knownForTitle}>Known For</h1>
        <div className={styles.actorsJobs}>
          {known_for.map((film) => (
            <div className={styles.filmCardWrapper} key={film.id}>
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
                  <p>
                    ⭐ {film.vote_average.toFixed(1)}/10 ({film.vote_count})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActorDetail;
