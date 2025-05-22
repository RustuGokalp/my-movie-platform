import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

const ActorDetail = ({ actorDetail, actorCredits }) => {
  const {
    adult,
    also_known_as,
    biography,
    birthday,
    deathday,
    gender,
    homepage,
    imdb_id,
    name,
    known_for_department,
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
          alt={`${name} Photo`}
          unoptimized
        />
        <div>
          <h1>{name}</h1>
          <h3>{known_for_department}</h3>
          <div>{biography}</div>
        </div>
      </div>
      <div className={styles.knownForWrapper}>
        <h1 className={styles.knownForTitle}>Known For</h1>
        <div className={styles.actorsJobs}>
          <div className={styles.actorJobsPosterWrapper}>
            {actorCredits.map((credit, id) => (
              <div className={styles.filmCardWrapper} key={id}>
                <Link
                  href={`/${credit.title ? "movie" : "serie"}/${credit.id}`}
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${credit.poster_path}`}
                    width={200}
                    height={300}
                    className={styles.filmPoster}
                    alt={credit.name ?? credit.title}
                    unoptimized
                  />
                </Link>
                <div className={styles.filmDetail}>
                  <div className={styles.filmTitle}>
                    <strong>{credit.title ?? credit.name}</strong>
                    <p>
                      ⭐ {credit.vote_average?.toFixed(1)}/10 (
                      {credit.vote_count})
                    </p>
                  </div>
                  {credit.character && (
                    <p className={styles.characterName}>
                      As: {credit.character}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorDetail;
