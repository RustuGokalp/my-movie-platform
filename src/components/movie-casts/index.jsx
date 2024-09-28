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
  const topCrew = movieCast?.crew
    ?.sort((a, b) => b.popularity - a.popularity)
    ?.slice(0, 30);

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
        <div>
          {topCast && <h1>Cast Number:{topCast.length} </h1>}
          {topCast?.map((cast) => (
            <div className={styles.castWrapper} key={cast?.id}>
              <div>{cast?.name}</div>
            </div>
          ))}
        </div>

        <div>
          {topCrew && <h1>Crew Number: {topCrew.length}</h1>}
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
                    width={100}
                    height={125}
                    className={styles.crewImage}
                  />
                  <div>
                    <p className={styles.crewMemberName}>{crewMember?.name}</p>
                    {crewMember?.name != crewMember?.original_name && (
                      <div className={styles.originalNameWrapper}>
                        <h5>Original Name:</h5>
                        <h6>{original_name}</h6>
                      </div>
                    )}
                    <p>{crewMember?.job}</p>
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
