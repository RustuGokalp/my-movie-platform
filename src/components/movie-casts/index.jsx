"use client";
import React from "react";
import styles from "./styles.module.css";
import useMovieCastStore from "@/store/movieCast";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDoubleLeft } from "react-icons/fa";

const MovieCasts = () => {
  const movieCast = useMovieCastStore((state) => state.movieCast);
  const topCast = movieCast?.cast?.sort((a, b) => b.popularity - a.popularity);
  const topCrew = movieCast?.crew?.sort((a, b) => b.popularity - a.popularity);
  const departments = new Set();
  const crewByDepartment = {};

  topCrew?.forEach((crewMember) => {
    departments.add(crewMember?.department);

    if (!crewByDepartment[crewMember?.department]) {
      crewByDepartment[crewMember?.department] = [];
    }

    crewByDepartment[crewMember?.department].push(crewMember);
  });
  return (
    <>
      <Link href={`/movie/${movieCast?.id}`} className={styles.goBackBtn}>
        <FaAngleDoubleLeft />
        Go Back
      </Link>
      <div className={styles.castAndCrewWrapper}>
        <div className={styles.castAreaWrapper}>
          {topCast && <h1 className={styles.castTitle}>Cast</h1>}
          {topCast?.map((cast) => (
            <div className={styles.castWrapper} key={cast?.id}>
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
                width={75}
                height={110}
                className={styles.crewImage}
              />
              <div className={styles.cardTextWrapper}>
                <div className={styles.castMemberName}>{cast?.name}</div>
                {cast?.name != cast?.original_name && (
                  <div className={styles.originalNameWrapper}>
                    <h4>Original Name:</h4>
                    <h5>{cast?.original_name}</h5>
                  </div>
                )}
                <div className={styles.characterArea}>{cast?.character}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.crewAreaWrapper}>
          {[...departments].map((department) => (
            <div key={department} className={styles.departmentWrapper}>
              <h1 className={styles.departmentTitle}>{department}</h1>
              {crewByDepartment[department].map((crewMember) => (
                <div className={styles.crewWrapper} key={crewMember?.credit_id}>
                  <Image
                    unoptimized
                    src={
                      crewMember?.profile_path
                        ? `https://image.tmdb.org/t/p/original${crewMember.profile_path}`
                        : crewMember?.gender == 2
                        ? "/default-profile-man.jpg"
                        : "/default-profile-woman.jpeg"
                    }
                    alt={crewMember?.name}
                    width={75}
                    height={110}
                    className={styles.crewImage}
                  />
                  <div className={styles.cardTextWrapper}>
                    <p className={styles.crewMemberName}>{crewMember?.name}</p>
                    {crewMember?.name != crewMember?.original_name && (
                      <div className={styles.originalNameWrapper}>
                        <h4>Original Name:</h4>
                        <h5>{crewMember?.original_name}</h5>
                      </div>
                    )}
                    <p className={styles.crewJob}>{crewMember?.job}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieCasts;
