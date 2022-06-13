import React, { useContext } from "react";

// styles
import styles from "./Alert.module.scss";

// icons
import { RiCloseLine } from "react-icons/ri";

function Alert({ type, message }) {
  return (
    <div className={styles.container}>
      {/* content */}
      <div
        className={`styles.content ${
          type === "danger"
            ? styles.danger
            : type === "success"
            ? styles.success
            : styles.warning
        }`}
      >
        {message}
      </div>
    </div>
  );
}

export default Alert;
