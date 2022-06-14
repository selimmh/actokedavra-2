import React, { useContext } from "react";

// styles
import styles from "./Alert.module.scss";

// context
const { Context } = require("../../contexts/context");

function Alert({ type, message }) {
  // context
  const { setAlert } = useContext(Context);
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
        {/* icon */}
        <span className={styles.icon}>
          {type === "danger" ? "?" : type === "success" ? "✓" : "!"}
        </span>
        {message}
        <button onClick={() => setAlert(false)} className={styles.close}>
          ✕
        </button>
      </div>
    </div>
  );
}

export default Alert;
