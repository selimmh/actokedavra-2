import React from "react";

// styles
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>ActoKedavra</h1>
    </div>
  );
}

export default Header;
