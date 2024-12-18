import Image from "next/image";
import styles from "./HelpDescribe.module.css";
import React from "react";
import Button from "@/components/atoms/Button/Button";
import { useTranslations } from "next-intl";

function HelpDescribe() {
  const t = useTranslations("HelpDescribe");
  return (
    <div className={`${styles.help_describe}`}>
      <div>
        {t("title")}
        <ul>
          <li>
            <div>
              <Image
                src="/benefit2.png.webp"
                alt="logo"
                fill
                sizes="auto, auto"
              />
            </div>
            <div>{t("financialSupport")}</div>
          </li>
          <li>
            <div>
              <Image
                src="/benefit1.png.webp"
                alt="logo"
                fill
                sizes="auto, auto"
              />
            </div>
            <div>{t("education")}</div>
          </li>
          <li>
            <div>
              <Image
                src="/benefit.png.webp"
                alt="logo"
                fill
                sizes="auto, auto"
              />
            </div>
            <div>{t("psychologicalCare")}</div>
          </li>
        </ul>
      </div>
      <div>
        {t("missing.title")}
        <br /> {t("missing.subTitle")}
        <br /> {t("missing.goal")}
        <Button text={t("btn_help")} size="Large" />
      </div>
    </div>
  );
}

export default HelpDescribe;
