"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import Button from "@/components/atoms/Button/Button";
import styles from "./Header.module.css";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

function Header() {
  const params = useParams();
  const [isBurger, setBurger] = useState(false);
  const [isEndpoint, setIsEndPoint] = useState("");

  const t = useTranslations("Header");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const fullUrl = window.location.href.split("");
      const endPoint = fullUrl.slice(fullUrl.length - 2).join("");
      setIsEndPoint(endPoint);
    }
  }, []);

  return (
    <div className={`${styles.header}`}>
      <div>
        {params.locale === "en" ? (
          <Image src="/logo_english.svg" alt="logo" fill sizes="auto" />
        ) : (
          <Image src="/FundLogo.webp" priority alt="logo" fill sizes="auto" />
        )}
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
        <div className={`${styles.header_lang_burg}`}>
          <ul>
            <li>
              <button
                className={
                  isEndpoint === "uk"
                    ? styles.lang_active_burger
                    : styles.lang_inactive_burger
                }
              >
                <Link href="/uk" locale={false}>
                  UA
                </Link>
              </button>
            </li>
            <li className={styles.line}></li>
            <li>
              <button
                className={
                  isEndpoint === "en"
                    ? styles.lang_active_burger
                    : styles.lang_inactive_burger
                }
              >
                <Link href="/en" locale={false}>
                  EN
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.header_lang}`}>
        <Button text={t("btn_help")} size="Small" />
        <ul>
          <li>
            <button
              className={
                isEndpoint === "uk" ? styles.lang_active : styles.lang_inactive
              }
            >
              <Link href="/uk" locale={false}>
                UA
              </Link>
            </button>
          </li>
          <li className={styles.line}></li>
          <li>
            <button
              className={
                isEndpoint === "en" ? styles.lang_active : styles.lang_inactive
              }
            >
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
