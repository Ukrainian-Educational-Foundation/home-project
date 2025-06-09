import React from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/atoms/Button/Button";
import styles from "./OurMission.module.css";

const OurMission = () => {
  const t = useTranslations("OurMission");
  return (
    <div className={styles.ourMission_container}>
      <h1 className={styles.title}>{t("title")}</h1>
      <div className={styles.container}>
        <p className={styles.description}>
          {t("description_title")} <br />
          {t("description")}
        </p>
        <Button text={t("btn_help")} size={"Large"} />
      </div>
    </div>
  );
};

export default OurMission;
