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
  VIEW_TAB = 52,
  VIEW_MOB = 82,
}

function TrustUs() {
  const t = useTranslations("TrustUs");
  const params = useParams();
  const initialView = -Slide.VIEW * Math.floor(dataSlideTrust.length - 3);
  const initialViewTablet = -Slide.VIEW_TAB * (dataSlideTrust.length - 1);
  const initialViewMob = -Slide.VIEW_MOB * (dataSlideTrust.length - 1);
  const initialCenter = Math.floor(dataSlideTrust.length - 2);

  const [center, setCenter] = useState<number>(initialCenter);
  const [view, setView] = useState(0);
  const [data, setData] = useState<DataProps[]>([]);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log(isTablet, isMobile);
  }, [isTablet, isMobile]);

  useEffect(() => {
    if (isMobile) {
      setView(initialViewMob);
    } else if (isTablet) {
      setView(initialViewTablet);
    } else {
      setView(initialView);
    }
  }, [isTablet, isMobile, initialViewTablet, initialView, initialViewMob]);

  useEffect(() => {
    if (params.locale === "en") {
      if (
        dataSlideTrustEn.length > 0 &&
        data.length === 0 &&
        !isMobile &&
        !isTablet
      ) {
        setData([...dataSlideTrustEn.slice(3), ...dataSlideTrustEn]);
      } else {
        setData([...dataSlideTrustEn.slice(1), ...dataSlideTrustEn]);
      }
      return;
    }

    if (
      dataSlideTrust.length > 0 &&
      data.length === 0 &&
      !isMobile &&
      !isTablet
    ) {
      setData([...dataSlideTrust.slice(3), ...dataSlideTrust]);
    } else {
      setData([...dataSlideTrust.slice(1), ...dataSlideTrust]);
    }
  }, [data.length, params.locale, isMobile, isTablet]);

  useEffect(() => {}, [initialView, initialCenter]);

  const handlePrev = () => {
    if (!isMobile && !isTablet) {
      if (view === 0) {
        setView(initialView);
        setCenter(initialCenter);
      } else {
        setView(view + Slide.VIEW);
        setCenter(center - 1);
      }
    } else if (isTablet) {
      if (view === 0) {
        setView(initialViewTablet);
      } else {
        setView(view + Slide.VIEW_TAB);
      }
    } else if (isMobile) {
      if (view === 0) {
        setView(initialViewMob);
      } else {
        setView(view + Slide.VIEW_MOB);
      }
    }
  };

  const handleNext = () => {
    if (!isMobile && !isTablet) {
      if (view === -Slide.VIEW * (data.length - 3)) {
        setView(initialView);
        setCenter(initialCenter);
      } else {
        setView(view - Slide.VIEW);
        setCenter(center + 1);
      }
    } else if (isTablet) {
      if (view === -Slide.VIEW_TAB * (data.length - 1)) {
        setView(initialViewTablet);
      } else {
        setView(view - Slide.VIEW_TAB);
      }
    } else if (isMobile) {
      if (view === -Slide.VIEW_MOB * (data.length - 1)) {
        setView(initialViewMob);
      } else {
        setView(view - Slide.VIEW_MOB);
      }
    }
  };

  useEffect(() => {
    const tabletMediaQuery = window.matchMedia(
      "(min-width: 850px) and (max-width: 1260px)"
    );
    const mobileMediaQuery = window.matchMedia("(max-width: 849px)");

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
    <div className={styles?.trust}>
      <div>{t("title")}</div>
      <div className={styles?.trust_main_wrap}>
        {isMobile || isTablet ? (
          <button onClick={handlePrev} className={styles.trust_btn_left}>
            <Image src="/arrow-left.png.webp" alt="logo" fill sizes="auto" />
          </button>
        ) : null}
        <div className={styles?.trust_wrap}>
          <ul
            style={{
              position: "relative",
              left: `${view}${isMobile || isTablet ? "vw" : "px"}`,
              transition: "300ms",
            }}
          >
            {data.length > 0 ? (
              data.map((item, index) => (
                <li
                  key={index}
                  className={
                    center === index && !isMobile && !isTablet
                      ? styles.trust_center
                      : center + 1 === index && !isMobile && !isTablet
                      ? styles.trust_right
                      : center - 1 === index && !isMobile && !isTablet
                      ? styles.trust_left
                      : styles.trust_card
                  }
                  style={{
                    position: "relative",
                    right:
                      index === center + 1 && !isMobile && !isTablet
                        ? "120px"
                        : index === center && !isMobile && !isTablet
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
        {isMobile || isTablet ? (
          <button onClick={handleNext} className={styles.trust_btn_right}>
            <Image src="/arrow-right.png.webp" alt="logo" fill sizes="auto" />
          </button>
        ) : null}
      </div>
      <Button size="Large" text={t("btn_help")} />
    </div>
  );
}

export default TrustUs;
