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

const Slide = {
  VIEW: 930,
};

function AboutFond() {
  const t = useTranslations("AboutFond");
  const params = useParams();
  const initialView = -Slide.VIEW;

  const [view, setView] = useState(initialView);
  const [animate, setAnimate] = useState(false);
  const [isData, setData] = useState<DataProps[]>([]);
  const [isHover, setHover] = useState({
    one: false,
    two: false,
    three: false,
  });

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (params.locale === "en") {
      if (dataEn.length > 0 && isData.length === 0) {
        setData([...dataEn.slice(dataEn.length / 2), ...dataEn]);
      }
      return;
    }

    if (data.length > 0 && isData.length === 0) {
      setData([...data.slice(data.length / 2), ...data]);
    }
  }, [isData.length, params.locale]);

  const handlePrev = () => {
    if (view === 0) {
      setView(initialView);
    } else {
      setView(view + Slide.VIEW);
    }
  };

  const handleNext = () => {
    if (view === -Slide.VIEW * 2) {
      setView(initialView);
    } else {
      setView(view - Slide.VIEW);
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
            <br />у {t("trips.description")}
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
                left: `${view}px`,
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
              <Image
                src="/news.png.webp"
                alt="logo"
                fill
                sizes="auto"
              />
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
