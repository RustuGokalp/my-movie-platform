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
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div className={styles.moviesSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {(showAll ? movies : movies.slice(0, 8)).map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                fill
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className={styles.buttonContainer}>
          <button className={styles.showAllButton} onClick={handleShowAll}>
            <FaChevronDown style={iconStyle} /> Show All Movies
          </button>
        </div>
      )}
    </div>
  );
};

export default MoviesSection;
