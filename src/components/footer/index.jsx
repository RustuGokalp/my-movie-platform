import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with ❤️ by&nbsp;
      <Link href="https://github.com/RustuGokalp" target="_blank">
        Rüştü Gökalp Beğen
      </Link>
    </footer>
  );
};

export default Footer;
