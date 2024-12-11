"use client";

import Image from "next/image";
import styles from "./Preview.module.css";
import React from "react";
import Button from "@/components/atoms/Button/Button";
import { useWindowSize } from "@/hooks/useResizeObserver";

function Preview() {
  const { width } = useWindowSize();

  const isMobile = width <= 768;
  return (
    <div className={`${styles.preview}`} id="preview">
      <div className={`${styles.preview_left}`}>
        <ul>
          <li>
            <div>
              <Image src="/Dim.png.webp" alt="logo" fill />
            </div>
            <div>
              <Image src="/sunrice.png.webp" alt="logo" fill />
            </div>
          </li>
          <li>
            Ми будуємо дім для дітей-сиріт, що
            <br className={`${styles.hidden_on_mobile}`} /> живуть з опікунами
            пенсійного віку
          </li>
          <li>
            <div>
              мета збору
              <br className={`${styles.show_on_mobile}`} />
              <span>5 000 000 грн</span>
            </div>
            <Button text="ХОЧУ ДОПОМОГТИ" size={isMobile ? "Small" : "Large"} />
          </li>
        </ul>
      </div>
      <div className={`${styles.preview_right}`}>
        <div>
          <ul>
            <li>Влад, 7 років</li>
            <li>м. Лиман, Донецька обл</li>
            <li>мама загинула, живе з бабусею</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Preview;
