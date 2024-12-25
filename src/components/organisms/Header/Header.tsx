"use client";

import Link from "next/link";
// import { useTranslation } from "next-i18next";
import { useTranslations } from "next-intl";

import Button from "@/components/atoms/Button/Button";
import styles from "./Header.module.css";

import React, { useState } from "react";
import Image from "next/image";

function Header() {
  const [isBurger, setBurger] = useState(false);

  // const { t } = useTranslation("common");
  const t = useTranslations("Header");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`${styles.header}`}>
      <div>
        <Image src="/FundLogo.webp" alt="logo" fill sizes="auto" />
      </div>
      <div className={`${styles.buttons} ${isBurger ? styles.activeMenu : ""}`}>
        <button
          onClick={() => {
            scrollToSection("preview");
            setBurger(false);
          }}
        >
          {t("main")}
        </button>
        <button
          onClick={() => {
            scrollToSection("ukr_map");
            setBurger(false);
          }}
        >
          {t("about_project")}
        </button>
        <button
          onClick={() => {
            scrollToSection("about_fond");
            setBurger(false);
          }}
        >
          {t("about_fond")}
        </button>
        <button
          onClick={() => {
            scrollToSection("contact");
            setBurger(false);
          }}
        >
          {t("contacts")}
        </button>
      </div>
      <div className={`${styles.header_lang}`}>
        <Button text={t("btn_help")} size="Small" />
        <ul>
          <li>
            <button>
              <Link href="/uk" locale={false}>
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
