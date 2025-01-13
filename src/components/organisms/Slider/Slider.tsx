"use client";

import { dataFoundSlider } from "@/data/dataFoundSlider";
import { dataFoundSliderEn } from "@/data/dataFoundSliderEn";
import styles from "./Slider.module.css";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Image from "next/image";

interface DataProps {
  text: string;
  id: number;
  img?: string;
  video?: string;
}

enum Slide {
  VIEW = 1260,
  VIEW_TAB = 90,
  VIEW_MOB = 92,
}

const Slider = () => {
  const t = useTranslations("Slider");
  const params = useParams();

  const [initialView, setInitialView] = useState(0);
  const [view, setView] = useState(0);
  const [data, setData] = useState<DataProps[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    const newView = isMobile
      ? -Slide.VIEW_MOB * dataFoundSlider.length + Slide.VIEW_MOB
      : isTablet
      ? -Slide.VIEW_TAB * Math.floor((dataFoundSlider.length - 2) / 2)
      : -Slide.VIEW * Math.floor((dataFoundSlider.length - 2) / 2);
    setInitialView(newView);
    setView(newView);
  }, [isMobile, isTablet, data]);

  useEffect(() => {
    if (params.locale === "en") {
      if (dataFoundSliderEn.length > 0 && data.length === 0 && !isMobile) {
        setData([...dataFoundSliderEn.slice(2), ...dataFoundSliderEn]);
      } else if (isMobile) return;
      if (isMobile && flag) {
        setData([...dataFoundSliderEn.slice(1), ...dataFoundSliderEn]);
        setFlag(false);
      } else if (isMobile) return;
      return;
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
    if (!isMobile && !isTablet) {
      if (view === 0) {
        setView(initialView);
      } else {
        setView(view + Slide.VIEW);
      }
    } else if (isTablet) {
      if (view === 0) {
        setView(initialView);
      } else {
        setView(view + Slide.VIEW_TAB);
      }
    } else if (isMobile) {
      if (view === 0) {
        setView(initialView);
      } else {
        setView(view + Slide.VIEW_MOB);
      }
    }
  };

  const handleNext = () => {
    if (!isMobile && !isTablet) {
      if (view === -Slide.VIEW * (data.length / 2 - 1)) {
        setView(initialView);
      } else {
        setView(view - Slide.VIEW);
      }
    } else if (isTablet) {
      if (view === -Slide.VIEW_TAB * (data.length / 2 - 1)) {
        setView(initialView);
      } else {
        setView(view - Slide.VIEW_TAB);
      }
    } else if (isMobile) {
      if (view === -Slide.VIEW_MOB * data.length + Slide.VIEW_MOB) {
        setView(initialView);
      } else {
        setView(view - Slide.VIEW_MOB);
      }
    }
  };

  useEffect(() => {
    const tabletMediaQuery = window.matchMedia(
      "(min-width: 768px) and (max-width: 1024px)"
    );
    const mobileMediaQuery = window.matchMedia("(max-width: 768px)");

    const handleTabletResize = (
      event: MediaQueryListEvent | MediaQueryList
    ) => {
      setIsTablet(event.matches);
    };

    const handleMobileResize = (
      event: MediaQueryListEvent | MediaQueryList
    ) => {
      setIsMobile(event.matches);
    };

    handleTabletResize(tabletMediaQuery);
    handleMobileResize(mobileMediaQuery);

    tabletMediaQuery.addEventListener("change", handleTabletResize);
    mobileMediaQuery.addEventListener("change", handleMobileResize);

    return () => {
      tabletMediaQuery.removeEventListener("change", handleTabletResize);
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
            left: `${view}${!isTablet && !isMobile ? "px" : "vw"}`,
            transition: "300ms",
          }}
        >
          {data.length > 0 ? (
            data.map((el, i) => (
              <div key={i} className={styles.slide}>
                {el?.img && (
                  <Image
                    src={el.img}
                    alt=""
                    width="100"
                    height="100"
                    className={styles.slide_img}
                  />
                )}
                {el?.video && (
                  <video
                    width="100px"
                    height="100px"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.slide_video}
                  >
                    <source src={el.video} type="video/mp4" />
                    <track
                      src={el.video}
                      kind="subtitles"
                      srcLang="en"
                      label="English"
                    />
                    Your browser does not support the video tag.
                  </video>
                )}
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
