"use client";

import Button from "@/components/atoms/Button/Button";
import styles from "./TrustUs.module.css";
import React, { useEffect, useState, useRef } from "react";
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
  video?: string;
  name?: string;
  position?: string;
  facebookLink?: string;
  photo?: string;
}

enum Slide {
  VIEW = 440,
  VIEW_TAB = 52,
  VIEW_MOB = 82,
}

function TrustUs() {
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const t = useTranslations("TrustUs");
  const params = useParams();
  const initialView = -Slide.VIEW * (dataSlideTrust.length - 2);
  const initialViewTablet = -Slide.VIEW_TAB * (dataSlideTrust.length - 1);
  const initialViewMob = -Slide.VIEW_MOB * (dataSlideTrust.length - 1);
  const initialCenter = Math.floor(dataSlideTrust.length - 1);

  const [center, setCenter] = useState<number>(initialCenter);
  const [view, setView] = useState(0);

  const [viewVideo, setViewVideo] = useState<boolean[]>([]);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState<number | null>(
    null
  );

  const [data, setData] = useState<DataProps[]>([]);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handlePlayClick = (index: number) => {
    if (
      currentPlayingIndex !== null &&
      videoRefs.current[currentPlayingIndex]
    ) {
      videoRefs.current[currentPlayingIndex].pause();
    }

    let currentVideo;
    let numVideo = null;

    if (!isMobile && !isTablet) {
      numVideo =
        index === data.length - 1 || index === 0
          ? dataSlideTrust.length - 1
          : null;
      currentVideo = videoRefs.current[numVideo || index];
    } else {
      currentVideo = videoRefs.current[index];
    }

    if (currentVideo) {
      currentVideo.play();
      setCurrentPlayingIndex(numVideo || index);
    }

    const newViewVideo = viewVideo.map((_, i) => {
      if (i === numVideo) {
        return true;
      } else if (numVideo && i === index) {
        return false;
      } else if (!numVideo && i === index) {
        return true;
      } else {
        return false;
      }
    });
    setViewVideo(newViewVideo);
  };

  useEffect(() => {
    setViewVideo(new Array(data.length).fill(false));
  }, [data]);

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
        setData([
          ...dataSlideTrustEn.slice(1, 2),
          ...dataSlideTrustEn.slice(3),
          ...dataSlideTrustEn,
          ...dataSlideTrustEn.slice(1, 2),
        ]);
      } else if (isMobile || isTablet) {
        setData([
          dataSlideTrustEn[2],
          dataSlideTrustEn[3],
          dataSlideTrustEn[0],
          dataSlideTrustEn[1],
          dataSlideTrustEn[2],
          dataSlideTrustEn[3],
          dataSlideTrustEn[0],
        ]);
      }
      return;
    }

    if (
      dataSlideTrust.length > 0 &&
      data.length === 0 &&
      !isMobile &&
      !isTablet
    ) {
      setData([
        ...dataSlideTrust.slice(1, 2),
        ...dataSlideTrust.slice(3),
        ...dataSlideTrust,
        ...dataSlideTrust.slice(1, 2),
      ]);
    } else if (isMobile || isTablet) {
      setData([
        dataSlideTrust[2],
        dataSlideTrust[3],
        dataSlideTrust[0],
        dataSlideTrust[1],
        dataSlideTrust[2],
        dataSlideTrust[3],
        dataSlideTrust[0],
      ]);
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

  const extendedData = data.map((item, index) => ({
    ...item,
    uniqueKey: `${item.logo}_${index}`,
  }));

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
            {(extendedData || data).length > 0 ? (
              (extendedData || data).map((item, index) => {
                return (
                  <li
                    key={item.uniqueKey}
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
                      index === center - 1 && !isMobile && !isTablet
                        ? handlePrev
                        : index === center + 1 && !isMobile && !isTablet
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
                    <div className={styles.slide_container}>
                      <div className={styles.slide_description_container}>
                        <p>{t("feedback")}</p>
                        <h3>{item.name}</h3>
                        <p>{item.position}</p>
                        <a href={item.facebookLink} target="blank">
                          <Image
                            src="/FB_icon.svg"
                            alt="facebookLink"
                            width="32"
                            height="32"
                          />
                        </a>
                      </div>

                      <div className={styles.slide_video_container}>
                        {!viewVideo[index] && item?.photo && (
                          <div className={styles.slide_photo_container}>
                            <Image
                              src={item?.photo}
                              alt="photo"
                              width="100"
                              height="100"
                              className={styles.slide_video_photo}
                            />

                            <Image
                              src="/play.png.webp"
                              alt="photo"
                              width="64"
                              height="64"
                              className={styles.slide_video_play}
                              onClick={() => handlePlayClick(index)}
                            />
                          </div>
                        )}

                        {viewVideo && (
                          <div className={styles.video}>
                            <video
                              ref={(el) => {
                                if (el) {
                                  videoRefs.current[index] = el;
                                } else {
                                  delete videoRefs.current[index];
                                }
                              }}
                              width="100%"
                              height="100%"
                              style={{ borderRadius: "0 16px 16px 0" }}
                              controls={
                                index === data.length - 1 ||
                                (index === 0 && !isMobile && !isTablet)
                                  ? false
                                  : true
                              }
                              preload="none"
                              className={styles.slide_video}
                            >
                              <source src={item.video} type="video/mp4" />
                              <track
                                src={item.video}
                                kind="subtitles"
                                srcLang="en"
                                label="English"
                              />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })
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
