import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./types";

function Button({ text, disabled = false, size = "Small" }: ButtonProps) {
  const sizeClass = size === "Large" ? styles.large : styles.small;

  return (
    <button disabled={disabled} className={`${styles.button} ${sizeClass}`}>
      {text}
    </button>
  );
}

export default Button;
