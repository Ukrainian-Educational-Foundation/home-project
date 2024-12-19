import { useTranslations } from "next-intl";
import styles from "./OldLady.module.css";
import React from "react";

function OldLady() {
  const t = useTranslations("OldLady");
  return (
    <div className={`${styles.old_lady}`}>
      <div>{t("title")}</div>
      <div>
        <div>
          <video
            src="/old.webm"
            autoPlay
            loop
            muted
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          ></video>
        </div>

        <ul>
          <li>{t("aboutProject.title")}</li>
          <li>{t("aboutProject.description")}</li>
          <li>{t("aboutProject.teamInformation")}</li>
        </ul>
      </div>
    </div>
  );
}

export default OldLady;
