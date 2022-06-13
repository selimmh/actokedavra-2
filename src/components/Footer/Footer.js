import React from "react";
import moment from "moment";

// styles
import styles from "./Footer.module.scss";

function Footer() {
  let time = moment().format("LL");

  return (
    <div className={styles.container}>
      <h3 className={styles.date}>{time}</h3>
      <h2 className={styles.logo}>ActoKedavra</h2>
    </div>
  );
}

export default Footer;
