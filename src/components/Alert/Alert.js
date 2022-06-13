import React, { useContext } from "react";

// styles
import styles from "./Alert.module.scss";

function Alert({ type, message }) {
  return (
    <div className={styles.container}>
      {/* content */}
      <div className={styles.content}>{message}</div>
    </div>
  );
}

export default Alert;
