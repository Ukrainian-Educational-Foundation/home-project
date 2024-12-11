"use client";

import styles from "./AboutFond.module.css";
import React, { useState, useEffect, useRef } from "react";
import { data } from "@/data/data";
import Image from "next/image";
import AnimatedNumbers from "@/hooks/animationNumber";

function AboutFond() {
  const [view, setView] = useState(0);
  const [animate, setAnimate] = useState(false); // Флаг для запуска анимации
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentSection = sectionRef.current; // Сохраняем текущее значение ref
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true); // Запуск анимации при попадании в зону видимости
        }
      },
      { threshold: 0.5 } // Запуск, когда 50% секции видно на экране
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection); // Используем сохранённую переменную
      }
    };
  }, []);

  const handlePrev = () => {
    if (view < 0) setView(view + 186);
  };

  const handleNext = () => {
    if (view > -774) setView(view - 186);
  };

  return (
    <div className={`${styles.about_fond}`} id="about_fond" ref={sectionRef}>
      <div>Про фонд</div>
      <ul>
        <li>
          <div>{animate && <AnimatedNumbers value={10} />}</div>
          <div>
            років
            <br />
            працює наш фонд
          </div>
        </li>
        <li>
          <div>{animate && <AnimatedNumbers value={6} />}</div>
          <div>проектів реалізовано</div>
        </li>
        <li>
          <div>{animate && <AnimatedNumbers value={86} />}</div>
          <div>
            поїздок
            <br />у прифронтові зони
          </div>
        </li>
        <li>
          <div>{animate && <AnimatedNumbers value={20000} />}</div>
          <div>дітей під опікою</div>
        </li>
      </ul>
      <div className={`${styles.about_fond_team}`}>
        <div>Наша команда</div>
        <div>
          <button onClick={handlePrev} disabled={view === 0}>
            <Image src="/arrow-left.png.webp" alt="logo" fill />
          </button>
          <div className={`${styles.about_fond_wrap}`}>
            <ul
              style={{
                position: "relative",
                left: `${view}px`,
                transition: "300ms",
              }}
            >
              {data.length > 0 ? (
                data.map((human, index) => (
                  <li key={index}>
                    <div className={`${styles.about_img_wrap}`}>
                      <Image
                        src={human.photo || "/user.png"}
                        alt={human.name || "No photo available"}
                        fill
                        priority={index === 0}
                        style={{
                          objectPosition:
                            data.length === index + 1 ? "0px -10px" : "50% 50%",
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
          <button onClick={handleNext} disabled={view === 3}>
            <Image src="/arrow-right.png.webp" alt="logo" fill />
          </button>
        </div>
      </div>
      <div className={`${styles.about_fond_last}`}>
        <div>Медіа про нас</div>
        <ul>
          <li>
            <Image src="/news.png.webp" alt="logo" fill />
          </li>
          <li>
            <Image src="/news.png.webp" alt="logo" fill />
          </li>
          <li>
            <Image src="/news.png.webp" alt="logo" fill />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutFond;
