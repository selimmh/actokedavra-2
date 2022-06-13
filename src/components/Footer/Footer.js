import React from "react";

// styles
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      <h3 className={styles.date}>Time</h3>
      <h2 className={styles.logo}>ActoKedavra</h2>
    </div>
  );
}

export default Footer;
