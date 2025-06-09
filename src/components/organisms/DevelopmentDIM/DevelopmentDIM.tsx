import React from "react";
import { useTranslations } from "next-intl";
import styles from "./DevelopmentDIM.module.css";
import Image from "next/image";

const DevelopmentDIM = () => {
  const t = useTranslations("DevelopmentDIM");
  return (
    <div className={styles.DevelopmentDIM_container}>
      <h1 className={styles.title}>{t("title")}</h1>
      <div className={styles.photo_container}>
        <div className={styles.left}>
          <Image src="/readyHome.jpg" alt="photo" fill className={styles.img} />
        </div>
        <div className={styles.right}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Image
                src="/images/1adbd0cf45c1f6ea32d925bf63b07621692e7d8c.png"
                alt="photo"
                width="182"
                height="182"
                className={styles.photo}
              />
            </li>
            <li className={styles.item}>
              <Image
                src="/images/5178fa23829a4333b28ed12e8419cdd430791e62.jpg"
                alt="photo"
                width="182"
                height="182"
                className={styles.photo}
              />
            </li>
            <li className={styles.item}>
              <Image
                src="/images/46b6d2160416fc2cc122f1114a0f2e2c2bfb0c5c.png"
                alt="photo"
                width="182"
                height="182"
                className={styles.photo}
              />
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.description}>{t("description")}</p>
    </div>
  );
};

export default DevelopmentDIM;
