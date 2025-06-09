import { useTranslations } from "next-intl";
import styles from "./OldLady.module.css";
import React from "react";
import Button from "@/components/atoms/Button/Button";

function OldLady() {
  const t = useTranslations("OldLady");
  return (
    <div className={`${styles.old_lady}`}>
      <div>
        {t("title")}
        <br />
        {/* <p className={styles.old_lady_title}> */}
        {t("title_2")}
        {/* </p> */}
        <Button text={t("btn_help")} size={"Large"} />
      </div>

      {/* <div>
        <div>
          <video
            src="/old.webm"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "16px",
            }}
          ></video>
        </div>

        <ul>
          <li>{t("aboutProject.title")}</li>
          <li>{t("aboutProject.description")}</li>
          <li>{t("aboutProject.teamInformation")}</li>
        </ul>
      </div> */}
    </div>
  );
}

export default OldLady;
