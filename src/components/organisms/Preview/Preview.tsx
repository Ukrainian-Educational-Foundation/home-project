"use client";

import Image from "next/image";
import styles from "./Preview.module.css";
import React from "react";
import Button from "@/components/atoms/Button/Button";
import { useWindowSize } from "@/hooks/useResizeObserver";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

function Preview() {
  const { width } = useWindowSize();
  const t = useTranslations("Preview");
  const params = useParams();

  // const isMobile = width <= 768;
  const isSpace = width < 354;
  return (
    <div className={`${styles.preview}`} id="preview">
      <div className={`${styles.preview_left}`}>
        <ul>
          <li>
            <div>
              {params.locale === "en" ? (
                <>
                  <Image
                    src="/dim-english.svg"
                    alt="logo"
                    fill
                    sizes="auto, auto"
                    className={styles.logo_en}
                  />
                  <div className={styles.sunrice_en}>
                    <Image
                      src="/sunrice.png.webp"
                      alt="logo"
                      fill
                      sizes="auto, auto"
                      className={styles.sunrice_en}
                    />
                  </div>
                </>
              ) : (
                <>
                  <Image
                    src="/Dim.png.webp"
                    alt="logo"
                    priority
                    fill
                    sizes="auto, auto"
                  />
                  <div className={styles.sunrice}>
                    <Image
                      src="/sunrice.png.webp"
                      alt="logo"
                      fill
                      sizes="auto, auto"
                    />
                  </div>
                </>
              )}
            </div>
            {/* <div>
              <Image
                src="/sunrice.png.webp"
                alt="logo"
                fill
                sizes="auto, auto"
              />
            </div> */}
          </li>
          <li>
            {t("title")}
            <br className={`${styles.hidden_on_mobile}`} /> {t("subTitle")}
          </li>
          <li>
            <div>
              {t("goal")} {isSpace ? " " : null}
              <br className={`${styles.show_on_mobile}`} />
              <span>{t("goalPrice")}</span>
            </div>
            <Button text={t("btn_help")} size="Large" />
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
