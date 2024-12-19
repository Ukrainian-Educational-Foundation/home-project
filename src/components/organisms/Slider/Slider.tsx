"use client";

import { dataFoundSlider } from "@/data/dataFoundSlider";
import { dataFoundSliderEn } from "@/data/dataFoundSliderEn";
import styles from "./Slider.module.css";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

interface DataProps {
  text: string;
  id: number;
}

enum Slide {
  VIEW = 90,
}

const Slider = () => {
  const t = useTranslations("Slider");
  const params = useParams();

  const initialView =
    -Slide.VIEW * Math.floor((dataFoundSlider.length - 2) / 2);

  const [view, setView] = useState(initialView);
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    if (params.locale === "en") {
      if (dataFoundSliderEn.length > 0 && data.length === 0) {
        setData([...dataFoundSliderEn.slice(2), ...dataFoundSliderEn]);
      }
      return;
    }

    if (dataFoundSlider.length > 0 && data.length === 0) {
      setData([...dataFoundSlider.slice(2), ...dataFoundSlider]);
    }
  }, [data.length, params.locale]);

  const handlePrev = () => {
    if (view === 0) {
      setView(initialView);
    } else {
      setView(view + Slide.VIEW);
    }
  };

  const handleNext = () => {
    console.log(view, -Slide.VIEW * (data.length / 2 - 1));
    if (view === -Slide.VIEW * (data.length / 2 - 1)) {
      setView(initialView);
    } else {
      setView(view - Slide.VIEW);
    }
  };

  return (
    <div className={styles.slider}>
      <div>{t("title")}</div>
      <div className={styles.slider_wrap}>
        <div
          className={styles.slider_container}
          style={{
            position: "relative",
            left: `${view}vw`,
            transition: "300ms",
          }}
        >
          {data.length > 0 ? (
            data.map((el, i) => (
              <div key={i} className={styles.slide}>
                <div>{el.text}</div>
              </div>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={handlePrev}></button>
        <button onClick={handleNext}></button>
      </div>
    </div>
  );
};

export default Slider;
