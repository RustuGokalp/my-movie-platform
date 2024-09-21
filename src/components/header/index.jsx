"use client";
import useAuthStore from "@/store/store";
import styles from "./styles.module.css";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import Avatar from "@/src/components/avatar";

const Header = () => {
  const { accountId } = useAuthStore();

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
          {accountId ? <Avatar /> : <Link href="/login">Login</Link>}
        </nav>
      </div>
    </header>
  );
};

export default Header;
