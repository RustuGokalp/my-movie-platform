import React from "react";
import Skeleton from "@/src/components/skeleton";
import styles from "./styles.module.css";
import { FaPlayCircle } from "react-icons/fa";

const HeaderLoading = () => {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <div className={styles.logo}>
          <FaPlayCircle /> NETFILMS
        </div>
        <nav className={styles.navigationMenu}>
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <Skeleton key={index} width="80px" height="24px" />
            ))}
          <Skeleton width="100px" height="40px" />
        </nav>
      </div>
    </header>
  );
};

export default HeaderLoading;
