import React from "react";
import styles from "./Button.module.css";
import { ButtonProps } from "./types";

function Button({ text, size = "Small" }: ButtonProps) {
  const sizeClass = size === "Large" ? styles.large : styles.small;

  return (
    <a
      href="https://send.monobank.ua/jar/5GQUm1YLKY"
      // "https://send.monobank.ua/jar/5HAkre4YYa"
      target="_blank"
      rel="noopener noreferrer"
      className={`${styles.button} ${sizeClass}`}
    >
      {/* <button disabled={disabled} className={`${styles.button} ${sizeClass}`}> */}
      {text.toUpperCase()}
      {/* </button> */}
    </a>
  );
}

export default Button;
