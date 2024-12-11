"use client";

import Button from "@/components/atoms/Button/Button";
import styles from "./Header.module.css";

import React, { useState } from "react";
import Image from "next/image";

function Header() {
  const [isBurger, setBurger] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`${styles.header}`}>
      <div>
        <Image src="/Fund_logo1.png.webp" alt="logo" fill />
      </div>
      <div className={`${styles.buttons} ${isBurger ? styles.activeMenu : ""}`}>
        <button onClick={() => scrollToSection("preview")}>Головна</button>
        <button onClick={() => scrollToSection("ukr_map")}>
          Про проект
        </button>
        <button onClick={() => scrollToSection("about_fond")}>
          Про фонд
        </button>
        <button onClick={() => scrollToSection("contact")}>
          Контакти
        </button>
      </div>
      <div className={`${styles.header_lang}`}>
        <Button text="ХОЧУ ДОПОМОГТИ" size="Small" />
        <ul>
          <li>
            <button>UA</button>
          </li>
          <li className={styles.line}></li>
          <li>
            <button>EN</button>
          </li>
        </ul>
      </div>
      <div className={`${styles.header_burger}`}>
        <button
          onClick={() => {
            setBurger((prev) => !prev);
          }}
          className={`${styles.burgerIcon} ${isBurger ? styles.active : ""}`}
        >
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>
      </div>
    </div>
  );
}

export default Header;
