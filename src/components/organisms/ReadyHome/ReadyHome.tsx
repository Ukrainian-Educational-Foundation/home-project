import React from "react";
import { useTranslations } from "next-intl";
import styles from "./ReadyHome.module.css";
import Image from "next/image";

const ReadyHome = () => {
  const t = useTranslations("ReadyHome");
  return (
    <div className={styles.readyHome_container}>
      <div className={styles.readyHome_left}>
        <Image
          src="/readyHome.jpg"
          alt="readyHome"
          fill
          className={styles.img}
        />
      </div>

      <div className={styles.readyHome_right}>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.descr}>{t("description_1")}</p>
        <p className={styles.descr}>{t("description_2")}</p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Image
              src="/check-mark-button.webp"
              alt="readyHome"
              fill
              className={styles.icon}
            />
            {t("list.item_1")}
          </li>
          <li className={styles.item}>
            <Image
              src="/check-mark-button.webp"
              alt="readyHome"
              fill
              className={styles.icon}
            />
            {t("list.item_2")}
          </li>
          <li className={styles.item}>
            <Image
              src="/check-mark-button.webp"
              alt="readyHome"
              fill
              className={styles.icon}
            />
            {t("list.item_3")}
          </li>
        </ul>
        <p className={styles.finaly}>{t("finaly")}</p>
      </div>
    </div>
  );
};

export default ReadyHome;
