import Image from "next/image";
import styles from "./HelpDescribe.module.css";
import React from "react";
import Button from "@/components/atoms/Button/Button";
import { useTranslations } from "next-intl";

function HelpDescribe() {
  const t = useTranslations("HelpDescribe");

  const middleBlockHeader = t("middleBlockHeader");
  return (
    <div className={`${styles.help_describe}`}>
      <div>
        {t("title")}
        <ul>
          <li>
            <div>
              <Image src="/benefit2.svg" alt="logo" fill sizes="auto" />
            </div>
            <div>{t("financialSupport")}</div>
          </li>
          <li>
            <div>
              <Image src="/benefit.svg" alt="logo" fill sizes="auto" />
            </div>
            <div>{t("education")}</div>
          </li>
          <li>
            <div>
              <Image src="/benefit3.svg" alt="logo" fill sizes="auto" />
            </div>
            <div>{t("psychologicalCare")}</div>
          </li>
          <li>
            <div>
              <Image src="/users-group-two-rounded-svgrepo-com 1.svg" alt="logo" fill sizes="auto" />
            </div>
            <div>{t("family")}</div>
          </li>
        </ul>
      </div>
      <div className={`${styles.help_middle_block}`}>
        <div>
          {middleBlockHeader?.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
        <div>{t("middleBlockBody")}</div>
      </div>
      <div>
        {t("missing.title")}
        <br /> {t("missing.subTitle")}
        <Button text={t("btn_help")} size="Large" />
      </div>
    </div>
  );
}

export default HelpDescribe;
