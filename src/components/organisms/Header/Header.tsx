"use client";

import Link from "next/link";
import { useTranslation } from "next-i18next";

import Button from "@/components/atoms/Button/Button";
import styles from "./Header.module.css";

import React, { useState } from "react";
import Image from "next/image";

function Header() {
  const [isBurger, setBurger] = useState(false);

  const { t } = useTranslation("common");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`${styles.header}`}>
      <div>
        <Image src="/Fund_logo1.png.webp" alt="logo" fill sizes="auto, auto" />
      </div>
      <div className={`${styles.buttons} ${isBurger ? styles.activeMenu : ""}`}>
        <button onClick={() => scrollToSection("preview")}>
          {t("header_main")}
        </button>
        <button onClick={() => scrollToSection("ukr_map")}>Про проект</button>
        <button onClick={() => scrollToSection("about_fond")}>Про фонд</button>
        <button onClick={() => scrollToSection("contact")}>Контакти</button>
      </div>
      <div className={`${styles.header_lang}`}>
        <Button text="ХОЧУ ДОПОМОГТИ" size="Small" />
        <ul>
          <li>
            <button>
              <Link href="/" locale={false}>
                UA
              </Link>
            </button>
          </li>
          <li className={styles.line}></li>
          <li>
            <button>
              <Link href="/en" locale={false}>
                EN
              </Link>
            </button>
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
