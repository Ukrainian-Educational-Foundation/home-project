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
  VIEW_MOB = 92,
}

const Slider = () => {
  const t = useTranslations("Slider");
  const params = useParams();

  const [initialView, setInitialView] = useState(0);
  const [view, setView] = useState(0);
  const [data, setData] = useState<DataProps[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const newView = isMobile
      ? -Slide.VIEW_MOB * dataFoundSlider.length + Slide.VIEW_MOB
      : -Slide.VIEW * Math.floor((dataFoundSlider.length - 2) / 2);
    setInitialView(newView);
    setView(newView);
  }, [isMobile, data]);

  useEffect(() => {
    if (params.locale === "en") {
      if (dataFoundSliderEn.length > 0 && data.length === 0 && !isMobile) {
        setData([...dataFoundSliderEn.slice(2), ...dataFoundSliderEn]);
      } else if (isMobile) return;
      if (isMobile && flag) {
        setData([...dataFoundSliderEn.slice(1), ...dataFoundSliderEn]);
        setFlag(false);
      } else if (isMobile) return;
    }

    if (dataFoundSlider.length > 0 && data.length === 0 && !isMobile) {
      setData([...dataFoundSlider.slice(2), ...dataFoundSlider]);
    }
    if (isMobile && flag) {
      setData([...dataFoundSlider.slice(1), ...dataFoundSlider]);
      setFlag(false);
    }
  }, [data.length, params.locale, isMobile, flag]);

  const handlePrev = () => {
    if (!isMobile) {
      if (view === 0) {
        setView(initialView);
      } else {
        setView(view + Slide.VIEW);
      }
    } else {
      if (view === 0) {
        setView(initialView);
      } else {
        setView(view + Slide.VIEW_MOB);
      }
    }
  };

  const handleNext = () => {
    if (!isMobile) {
      if (view === -Slide.VIEW * (data.length / 2 - 1)) {
        setView(initialView);
      } else {
        setView(view - Slide.VIEW);
      }
    } else {
      if (view === -Slide.VIEW_MOB * data.length + Slide.VIEW_MOB) {
        setView(initialView);
      } else {
        setView(view - Slide.VIEW_MOB);
      }
    }
  };

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 768px)");

    const handleMobileResize = (
      event: MediaQueryListEvent | MediaQueryList
    ) => {
      setIsMobile(event.matches);
    };

    handleMobileResize(mobileMediaQuery);

    mobileMediaQuery.addEventListener("change", handleMobileResize);

    return () => {
      mobileMediaQuery.removeEventListener("change", handleMobileResize);
    };
  }, []);

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
