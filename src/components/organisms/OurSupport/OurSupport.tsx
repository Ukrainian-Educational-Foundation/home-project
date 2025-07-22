import Image from "next/image";
import styles from "./OurSupport.module.css";
import React from "react";
import { useTranslations } from "next-intl";

    // "/univest.png.webp",
    // "/razom.png.webp",
    // "/12security.webp",
    //  "/img_20240906_200246_832-300x99-3.png.webp",
    // "/Devik.png.webp",
    // "/Слой_x0020_1.png.webp",

function OurSupport() {
  const t = useTranslations("OurSupport");
  const logos = [
    "/images-removebg-preview-1.png.webp",
    "/fajne-misto-3-1.png.webp",
    "/bce.webp",
    "/athlon.svg",
    "/dimrialogo.svg",
    "/alyonalogo.svg",
    "/bosch-logo.png.webp",
    "/rehau-logo-1.png.webp",
  ];

  const duplicatedLogos = [...logos];

  return (
    <div className={styles.our_suppurt}>
      <div className={styles.our_suppurt_wrap}>
        <div>{t("supporting")}</div>
        <ul>
          {duplicatedLogos.map((src, index) => {
            // const isSpecialImage = src === "/athlon.svg";

            return (
              <li key={index}>
                <div>
                  <Image
                    src={src}
                    alt="logo"
                    fill
                    // fill={!isSpecialImage}
                    // width={isSpecialImage ? 140 : undefined}
                    // height={isSpecialImage ? 50 : undefined}
                    // sizes={isSpecialImage ? "100px, 100px" : "auto, auto"}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default OurSupport;
