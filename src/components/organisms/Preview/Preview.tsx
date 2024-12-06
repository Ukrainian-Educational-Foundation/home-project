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
            <Image src="/Dim.png" alt="logo" width={506} height={328} />
            <Image src="/sunrice.png" alt="logo" width={208} height={208} />
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
        <ul>
          <li>Влад, 7 років</li>
          <li>м. Лиман, Донецька обл</li>
          <li>мама загинула, живе з бабусею</li>
        </ul>
      </div>
    </div>
  );
}

export default Preview;
