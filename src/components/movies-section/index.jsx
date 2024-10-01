"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import styles from "./styles.module.css";

const iconStyle = {
  marginRight: "8px",
  fontSize: "20px",
};

const MoviesSection = ({ title, movies }) => {
  const [visibleMovies, setVisibleMovies] = useState(10);

  const handleShowMore = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 8);
  };

  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies?.slice(0, visibleMovies).map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <div className={styles.imageWrapper}>
                <Image
                  fill
                  unoptimized
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>

      {visibleMovies < movies.length && (
        <div className={styles.buttonContainer}>
          <button className={styles.showAllButton} onClick={handleShowMore}>
            <FaChevronDown style={iconStyle} /> Show More Movies
          </button>
        </div>
      )}
    </div>
  );
};

export default MoviesSection;
