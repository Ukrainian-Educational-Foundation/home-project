"use client";

import Image from "next/image";
import styles from "./Preview.module.css";
import React from "react";
import Button from "@/components/atoms/Button/Button";
import { useWindowSize } from "@/hooks/useResizeObserver";
import { useTranslations } from "next-intl";

function Preview() {
  const { width } = useWindowSize();
  const t = useTranslations("Preview");

  const isMobile = width <= 768;
  return (
    <div className={`${styles.preview}`} id="preview">
      <div className={`${styles.preview_left}`}>
        <ul>
          <li>
            <div>
              <Image src="/Dim.png.webp" alt="logo" fill sizes="auto, auto" />
            </div>
            <div>
              <Image
                src="/sunrice.png.webp"
                alt="logo"
                fill
                sizes="auto, auto"
              />
            </div>
          </li>
          <li>
            {t("title")}
            <br className={`${styles.hidden_on_mobile}`} /> {t("subTitle")}
          </li>
          <li>
            <div>
              {t("goal")} &nbsp;
              <br className={`${styles.show_on_mobile}`} />
              <span>{t("goalPrice")}</span>
            </div>
            <Button text={t("btn_help")} size={isMobile ? "Small" : "Large"} />
          </li>
        </ul>
      </div>
      <div className={`${styles.preview_right}`}>
        <div>
          <ul>
            <li>{t("aboutChildren.name")}</li>
            <li>{t("aboutChildren.address")}</li>
            <li>{t("aboutChildren.history")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Preview;
