"use client";
import Image from "next/image";
import styles from "./Footer.module.css";
import React, { useEffect, useState } from "react";
import Button from "@/components/atoms/Button/Button";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

function Footer() {
  const t = useTranslations("Footer");
  const params = useParams();
  const [widthView, setWidthView] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidthView(window.innerWidth);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.footer_main}`}>
        <div>
          {params.locale === "en" ? (
            <Image src="/logo_english.svg" alt="logo" fill sizes="auto" />
          ) : (
            <Image src="/FundLogo.webp" priority alt="logo" fill sizes="auto" />
          )}
        </div>
        <div>
          {t("about_fond")}
          {/* Наша місія - змінювати життя дітей (евакуювати, знаходити житло,
          <br />
          лікувати, одягати, навчати). Робити щоденні маленькі зміни, що <br />
          призводять до якісної зміни життя дітей в Україні. */}
        </div>
        {widthView < 1025 ? (
          <Button text={t("btn_help")} size="Large" />
        ) : (
          <Button text={t("btn_help")} size="Small" />
        )}
      </div>
      <div>
        <a
          href="https://teamchallenge.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          developed by Team Challenge
          <div>
            <Image src="/element.png.webp" alt="logo" fill sizes="auto, auto" />
          </div>
          &nbsp;&nbsp;&nbsp;2024
        </a>
      </div>
    </div>
  );
}

export default Footer;
