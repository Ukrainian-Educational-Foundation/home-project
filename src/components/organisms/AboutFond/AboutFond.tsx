"use client";

import styles from "./AboutFond.module.css";
import React, { useState, useEffect, useRef } from "react";
import { data } from "@/data/data";
import { dataEn } from "@/data/dataEn";
import Image from "next/image";
import AnimatedNumbers from "@/hooks/animationNumber";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

interface DataProps {
  name: string;
  position: string;
  photo: string;
}

enum Slide {
  VIEW = 930,
  VIEW_TAB = 66,
  VIEW_MOB = 90,
}

function AboutFond() {
  const t = useTranslations("AboutFond");
  const params = useParams();

  const [animate, setAnimate] = useState(false);
  const [isData, setData] = useState<DataProps[]>([]);
  const [isHover, setHover] = useState({
    one: false,
    two: false,
    three: false,
  });
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [flag, setFlag] = useState(true);
  const [initialView, setInitialView] = useState(0);
  const [view, setView] = useState(0);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const newView = isTablet
      ? -Slide.VIEW_TAB * 2 - 22
      : isMobile
      ? -Slide.VIEW_MOB * 2 - 30
      : -Slide.VIEW;
    setInitialView(newView);
    setView(newView);
  }, [isTablet, isMobile]);

  useEffect(() => {
    if (
      isTablet
        ? view < -isData.length * 22
        : isMobile
        ? view < -isData.length * 30
        : view < -isData.length * 186
    ) {
      setView(initialView);
    }
  }, [initialView, view, isData, isTablet, isMobile]);

  useEffect(() => {
    if (params.locale === "en") {
      if (dataEn.length > 0 && isData.length === 0) {
        setData([...dataEn.slice(dataEn.length / 2), ...dataEn]);
      }
      if (dataEn.length > 0 && isData.length === 0 && !isTablet && !isMobile) {
        setData([...dataEn.slice(dataEn.length / 2), ...dataEn]);
      }
      if (
        dataEn.length > 0 &&
        isData.length > 0 &&
        (isTablet || isMobile) &&
        flag
      ) {
        setData([...dataEn.slice(3), ...dataEn]);
        setFlag(false);
      }
      return;
    }

    if (data.length > 0 && isData.length === 0) {
      setData([...data.slice(data.length / 2), ...data]);
    }
    if (data.length > 0 && isData.length === 0 && !isTablet && !isMobile) {
      setData([...data.slice(data.length / 2), ...data]);
    }
    if (
      data.length > 0 &&
      isData.length > 0 &&
      (isTablet || isMobile) &&
      flag
    ) {
      setData([...data.slice(3), ...data]);
      setFlag(false);
    }
  }, [flag, isData.length, isMobile, isTablet, params.locale]);

  const handlePrev = () => {
    if (view >= 0) {
      setView(initialView);
    } else {
      setView(
        view +
          (isTablet ? Slide.VIEW_TAB : isMobile ? Slide.VIEW_MOB : Slide.VIEW)
      );
    }
  };

  const handleNext = () => {
    if (
      (!isTablet && !isMobile && view === -Slide.VIEW * 2) ||
      (isTablet && view < -Slide.VIEW_TAB * 5) ||
      (isMobile && view < -Slide.VIEW_MOB * 5)
    ) {
      setView(initialView);
    } else {
      setView(
        view -
          (isTablet ? Slide.VIEW_TAB : isMobile ? Slide.VIEW_MOB : Slide.VIEW)
      );
    }
  };

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

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
    <div className={`${styles.about_fond}`} id="about_fond" ref={sectionRef}>
      <div>{t("title")}</div>
      <ul>
        <li>
          <div>{animate && <AnimatedNumbers value={10} />}</div>
          <div>
            {t("years.title")}
            <br />
            {t("years.description")}
          </div>
        </li>
        <li>
          <div>{animate && <AnimatedNumbers value={6} />}</div>
          <div>{t("projects")}</div>
        </li>
        <li>
          <div>{animate && <AnimatedNumbers value={86} />}</div>
          <div>
            {t("trips.title")}
            <br />{t("trips.description")}
          </div>
        </li>
        <li>
          <div>{animate && <AnimatedNumbers value={20000} />}</div>
          <div>{t("children")}</div>
        </li>
      </ul>
      <div className={`${styles.about_fond_team}`}>
        <div>{t("team")}</div>
        <div>
          <button onClick={handlePrev}>
            <Image
              src="/arrow-left.png.webp"
              alt="logo"
              fill
              sizes="auto, auto"
            />
          </button>
          <div className={`${styles.about_fond_wrap}`}>
            <ul
              style={{
                position: "relative",
                left: `${view}${!isTablet && !isMobile ? "px" : "vw"}`,
                transition: "300ms",
              }}
            >
              {isData.length > 0 ? (
                isData.map((human, index) => (
                  <li key={index}>
                    <div className={`${styles.about_img_wrap}`}>
                      <Image
                        src={human.photo || "/user.png"}
                        alt={human.name || "No photo available"}
                        fill
                        sizes="auto"
                        style={{
                          objectPosition:
                            human.name === "Дмитро Лук’яниця"
                              ? "0px -15px"
                              : "50% 50%",
                        }}
                      />
                    </div>
                    <div className={`${styles.about_fond_card}`}>
                      <div>{human.name}</div>
                      <div>{human.position}</div>
                    </div>
                  </li>
                ))
              ) : (
                <div>loading...</div>
              )}
            </ul>
          </div>
          <button onClick={handleNext}>
            <Image
              src="/arrow-right.png.webp"
              alt="logo"
              fill
              sizes="auto, auto"
            />
          </button>
        </div>
      </div>
      <div className={styles.about_fond_last}>
        <div>{t("aboutUs")}</div>
        <ul>
          <li
            onMouseEnter={() => setHover((prev) => ({ ...prev, one: true }))}
            onMouseLeave={() => setHover((prev) => ({ ...prev, one: false }))}
          >
            <a
              href="https://www.rbc.ua/rus/news/volonter-tetyana-lyulka-vlasni-ochi-bachila-1726219367.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/news.png.webp" alt="logo" fill sizes="auto" />
              {isHover.one ? (
                <div className={styles.about_fond_text}>{t("review")}</div>
              ) : null}
            </a>
          </li>
          <li
            onMouseEnter={() => setHover((prev) => ({ ...prev, two: true }))}
            onMouseLeave={() => setHover((prev) => ({ ...prev, two: false }))}
          >
            <a
              href="https://www.rbc.ua/rus/news/volonter-tetyana-lyulka-vlasni-ochi-bachila-1726219367.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/news.png.webp" alt="logo" fill sizes="auto, auto" />
              {isHover.two ? (
                <div className={styles.about_fond_text}>{t("review")}</div>
              ) : null}
            </a>
          </li>
          <li
            onMouseEnter={() => setHover((prev) => ({ ...prev, three: true }))}
            onMouseLeave={() => setHover((prev) => ({ ...prev, three: false }))}
          >
            <a
              href="https://www.rbc.ua/rus/news/volonter-tetyana-lyulka-vlasni-ochi-bachila-1726219367.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/news.png.webp" alt="logo" fill sizes="auto, auto" />
              {isHover.three ? (
                <div className={styles.about_fond_text}>{t("review")}</div>
              ) : null}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutFond;
