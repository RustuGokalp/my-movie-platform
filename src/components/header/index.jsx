"use client";
import useAuthStore from "@/store/store";
import styles from "./styles.module.css";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import User from "@/src/components/user";

const Header = () => {
  const { accountID } = useAuthStore();
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
          <User accountID={accountID} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
