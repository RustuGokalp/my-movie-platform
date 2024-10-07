"use client";
import { useState, useEffect } from "react";
import useAuthStore from "@/store/authStore";
import styles from "./styles.module.css";
import Link from "next/link";
import { FaPlayCircle, FaChevronDown } from "react-icons/fa";
import User from "@/src/components/user";
import HeaderLoading from "./loading";

const Header = () => {
  const { accountID } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [accountID]);

  if (isLoading) {
    return <HeaderLoading />;
  }

  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link href="/" className={styles.logo}>
          <FaPlayCircle /> NETFILMS
        </Link>
        <nav className={styles.navigationMenu}>
          <div className={styles.moviesMenuWrapper}>
            <Link href="/movies" className={styles.moviesMenuButton}>
              Movies <FaChevronDown />
            </Link>
            <div className={styles.moviesDropdownMenu}>
              <Link href="/movies/popular-movies">Popular</Link>
              <Link href="/movies/upcoming-movies">Upcoming</Link>
              <Link href="/movies/in-theater-movies">In Theater</Link>
              <Link href="/movies/top-rated-movies">Top Rated</Link>
            </div>
          </div>
          <div className={styles.moviesMenuWrapper}>
            <Link href="/" className={styles.moviesMenuButton}>
              Series <FaChevronDown />
            </Link>
            <div className={styles.moviesDropdownMenu}>
              <Link href="/series/popular-series">Popular</Link>
              <Link href="/series/upcoming-series">Upcoming</Link>
              <Link href="/series/in-theater-series">In Theater</Link>
              <Link href="/series/top-rated-series">Top Rated</Link>
            </div>
          </div>
          <Link href="/actors">Actors</Link>
          <User />
        </nav>
      </div>
    </header>
  );
};

export default Header;
