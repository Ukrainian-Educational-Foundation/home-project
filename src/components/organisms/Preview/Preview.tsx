import Image from "next/image";
import styles from "./Preview.module.css";
import React from "react";
import Button from "@/components/atoms/Button/Button";

function Preview() {
  return (
    <div className={`${styles.preview}`}>
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
            <br /> живуть з опікунами пенсійного віку
          </li>
          <li>
            <div>
              мета збору <span>5 000 000 грн</span>
            </div>
            <Button text="ХОЧУ ДОПОМОГТИ" size="Large" />
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
