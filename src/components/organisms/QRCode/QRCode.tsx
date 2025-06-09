import React from 'react'
import { useTranslations } from "next-intl";
import Image from 'next/image';
import styles from "./QRCode.module.css"

const QRCode = () => {
  const t = useTranslations("QRCode");
  return (
    <div className={styles.qrCode_container}>
      <div className={styles.container}>
        <Image
          src="/monobank.svg"
          alt="logo"
          width="187"
          height="55"
          // sizes="auto"
          className={styles.img}
        />
        <p className={styles.title}>{t("title")}</p>
      </div>
      <Image
        src="/qrCode.svg"
        alt="logo"
        width="207"
        height="227"
        // fill
        // sizes="auto"
        className={styles.qrCode}
      />
    </div>
  );
}

export default QRCode