"use client";
import { useState, useEffect } from "react";
import useAuthStore from "@/store/store";
import styles from "./styles.module.css";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
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
          <Link href="/">Movies</Link>
          <Link href="/">Series</Link>
          <Link href="/actors">Actors</Link>
          <User />
        </nav>
      </div>
    </header>
  );
};

export default Header;
