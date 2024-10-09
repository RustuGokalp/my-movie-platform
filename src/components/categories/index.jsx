"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";

const Categories = ({ categories }) => {
  const pathname = usePathname();
  const [baseHref, setBaseHref] = useState("/movies");

  useEffect(() => {
    const isMovies = pathname.includes("/movies");
    const isSeries = pathname.includes("/series");

    const basePath = isMovies ? "/movies" : isSeries ? "/series" : "/movies";

    switch (true) {
      case pathname.includes(
        `${basePath}/popular-${isMovies ? "movies" : "series"}`
      ):
        setBaseHref(`${basePath}/popular-${isMovies ? "movies" : "series"}`);
        break;
      case pathname.includes(
        `${basePath}/top-rated-${isMovies ? "movies" : "series"}`
      ):
        setBaseHref(`${basePath}/top-rated-${isMovies ? "movies" : "series"}`);
        break;
      case pathname.includes(
        `${basePath}/upcoming-${isMovies ? "movies" : "series"}`
      ):
        setBaseHref(`${basePath}/upcoming-${isMovies ? "movies" : "series"}`);
        break;
      case pathname.includes(
        `${basePath}/in-theater-${isMovies ? "movies" : "series"}`
      ):
        setBaseHref(`${basePath}/in-theater-${isMovies ? "movies" : "series"}`);
        break;
      default:
        setBaseHref(basePath);
    }
  }, [pathname]);

  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <Link
          key={category.id}
          className={styles.category}
          href={`${baseHref}/${category.id}`}
        >
          <div className={styles.name}>{category.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
