import Image from "next/image";
import styles from "./House.module.css";
import React from "react";

function House() {
  return (
    <div className={`${styles.house}`}>
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
          <Image src="/Home.png.webp" alt="logo" fill sizes="auto, auto" />
        </li>
        <li>
          <div>
            <Image
              src="/Ellipse1.png.webp"
              alt="logo"
              fill
              sizes="auto, auto"
            />
          </div>
          <div>
            <Image
              src="/Ellipse2.png.webp"
              alt="logo"
              fill
              sizes="auto, auto"
            />
          </div>
          <div>
            <Image
              src="/Ellipse3.png.webp"
              alt="logo"
              fill
              sizes="auto, auto"
            />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default House;
