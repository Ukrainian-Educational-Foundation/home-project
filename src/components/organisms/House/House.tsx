"use client";

import Image from "next/image";
import styles from "./House.module.css";
import React, { useEffect, useState } from "react";

function House() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    ["/Ellipse1.png.webp", "/Ellipse2.png.webp", "/Ellipse3.png.webp"],
    ["/Ellipse2.png.webp", "/Ellipse3.png.webp", "/cycle4.webp"],
    ["/Ellipse3.png.webp", "/cycle4.webp", "/cycle.webp"],
    ["/cycle4.webp", "/cycle.webp", "/Ellipse1.png.webp"],
    ["/cycle2.webp", "/Ellipse1.png.webp", "/Ellipse2.png.webp"],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.house}>
      <div>Що буде з проектом далі</div>
      <ul>
        <li>
          Для родин полеглих героїв, тих, хто
          <br /> перебуває в полоні або отримав
          <br /> поранення, а також для дітей, чиї
          <br /> батьки працюють у ДСНС чи є<br />
          медичними працівниками, у Центрі
          <br />
          &quot;ДІМ&quot; діятиме програма
          <br /> реабілітації. У центрі
          <br /> працюватимуть кваліфіковані
          <br /> психологи, а також будуть
          <br /> організовані групові заняття для
          <br /> підтримки та відновлення.
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
