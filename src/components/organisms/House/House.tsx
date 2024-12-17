"use client";

import Image from "next/image";
import styles from "./House.module.css";
import React, { useEffect, useState } from "react";

function House() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTablet, setIsTablet] = useState(false);

  const images = [
    ["/Ellipse1.png.webp", "/Ellipse2.png.webp", "/Ellipse3.png.webp"],
    ["/Ellipse2.png.webp", "/Ellipse3.png.webp", "/cycle4.webp"],
    ["/Ellipse3.png.webp", "/cycle4.webp", "/cycle.webp"],
    ["/cycle4.webp", "/cycle.webp", "/Ellipse1.png.webp"],
    ["/cycle2.webp", "/Ellipse1.png.webp", "/Ellipse2.png.webp"],
  ];

  // Следим за сменой индекса
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [images.length]);

  // Следим за изменением размеров экрана
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const handleResize = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsTablet(event.matches);
    };

    // Устанавливаем начальное значение
    handleResize(mediaQuery);

    // Добавляем слушателя
    mediaQuery.addEventListener("change", handleResize);

    // Очищаем слушателя при размонтировании компонента
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <div className={styles.house}>
      <div>Що буде з проектом далі</div>
      <ul>
        <li>
          Для родин полеглих героїв, тих, хто
          {isTablet ? null : <br />} перебуває в полоні або отримав
          {isTablet ? null : <br />} поранення, а також для дітей, чиї
          {isTablet ? null : <br />} батьки працюють у ДСНС чи є
          {isTablet ? null : <br />}
          медичними працівниками, у Центрі
          {isTablet ? null : <br />}
          &quot;ДІМ&quot; діятиме програма
          {isTablet ? null : <br />} реабілітації. У центрі
          {isTablet ? null : <br />} працюватимуть кваліфіковані
          {isTablet ? null : <br />} психологи, а також будуть
          {isTablet ? null : <br />} організовані групові заняття для
          {isTablet ? null : <br />} підтримки та відновлення.
        </li>
        <li>
          <Image src="/Home.png.webp" alt="logo" fill sizes="auto" />
        </li>
        <li>
          {images[currentIndex].map((src, idx) => (
            <div key={idx}>
              <Image
                key={`${currentIndex}-${idx}`}
                src={src}
                alt={`image ${idx + 1}`}
                fill
                sizes="auto"
              />
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
}

export default House;
