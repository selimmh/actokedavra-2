import React from "react";

// styles
import styles from "./Button.module.scss";

// types of buttons
// primary
// secondary

// disabled

// small
// medium
// large

function Button({
  onClick,
  primary,
  secondary,
  children,
  disabled,
  small,
  medium,
  large,
}) {
  return (
    <button
      className={`${styles.button} ${primary && styles.primary} ${
        secondary && styles.secondary
      } ${small && styles.small} ${medium && styles.medium} ${
        large && styles.large
      } ${disabled && styles.disabled}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
