"use client";

import Button from "@/components/atoms/Button/Button";
import styles from "./TrustUs.module.css";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { dataSlideTrust } from "@/data/dataSlideTrust";
import { dataSlideTrustEn } from "@/data/dataSlideTrustEn";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

interface DataProps {
  logo: string;
  comments: string;
  width: string;
  height: string;
}

enum Slide {
  VIEW = 440,
}

function TrustUs() {
  const t = useTranslations("TrustUs");
  const params = useParams();
  const initialView = -Slide.VIEW * Math.floor(dataSlideTrust.length - 3);
  const initialCenter = Math.floor(dataSlideTrust.length - 2);

  const [center, setCenter] = useState<number>(initialCenter);
  const [view, setView] = useState(initialView);
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    if (params.locale === "en") {
      if (dataSlideTrustEn.length > 0 && data.length === 0) {
        setData([...dataSlideTrustEn.slice(3), ...dataSlideTrustEn]);
      }
      return;
    }

    if (dataSlideTrust.length > 0 && data.length === 0) {
      setData([...dataSlideTrust.slice(3), ...dataSlideTrust]);
    }
  }, [data.length, params.locale]);

  useEffect(() => {
  }, [initialView, initialCenter]);

  const handlePrev = () => {
    if (view === 0) {
      setView(initialView);
      setCenter(initialCenter);
    } else {
      setView(view + Slide.VIEW);
      setCenter(center - 1);
    }
  };

  const handleNext = () => {
    if (view === -Slide.VIEW * (data.length - 3)) {
      setView(initialView);
      setCenter(initialCenter);
    } else {
      setView(view - Slide.VIEW);
      setCenter(center + 1);
    }
  };

  return (
    <div className={styles?.trust}>
      <div>{t("title")}</div>
      <div className={styles?.trust_wrap}>
        <ul
          style={{
            position: "relative",
            left: `${view}px`,
            transition: "300ms",
          }}
        >
          {data.length > 0 ? (
            data.map((item, index) => (
              <li
                key={index}
                className={
                  center === index
                    ? styles.trust_center
                    : center + 1 === index
                    ? styles.trust_right
                    : center - 1 === index
                    ? styles.trust_left
                    : styles.trust_card
                }
                style={{
                  position: "relative",
                  right:
                    index === center + 1
                      ? "120px"
                      : index === center
                      ? "60px"
                      : "",
                }}
                onClick={
                  index === center - 1
                    ? handlePrev
                    : index === center + 1
                    ? handleNext
                    : () => {}
                }
              >
                <div className={styles?.trust_logo_wrap}>
                  <div
                    style={{
                      width: item.width,
                      height: item.height,
                      position: "relative",
                    }}
                  >
                    <Image src={item.logo} alt="logo" fill sizes="auto" />
                  </div>
                </div>
                <div>{item.comments}</div>
              </li>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </ul>
      </div>
      <Button size="Large" text={t("btn_help")} />
    </div>
  );
}

export default TrustUs;
