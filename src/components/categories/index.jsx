"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";

const Categories = ({ categories }) => {
  const pathname = usePathname();
  const [baseHref, setBaseHref] = useState("/movies");

  useEffect(() => {
    switch (true) {
      case pathname.includes("/movies/popular-movies"):
        setBaseHref("/movies/popular-movies");
        break;
      case pathname.includes("/movies/top-rated-movies"):
        setBaseHref("/movies/top-rated-movies");
        break;
      case pathname.includes("/movies/upcoming-movies"):
        setBaseHref("/movies/upcoming-movies");
        break;
      case pathname.includes("/movies/in-theater-movies"):
        setBaseHref("/movies/in-theater-movies");
        break;
      default:
        setBaseHref("/movies");
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
