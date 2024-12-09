import Button from "@/components/atoms/Button/Button";
import styles from "./TrustUs.module.css";
import React from "react";
import Image from "next/image";

function TrustUs() {
  return (
    <div className={`${styles.trust}`}>
      <div>Нам довіряють</div>
      <ul>
        <li className={`${styles.trust_wrap}`}>
          <div>
            <Image src="/none.png.webp" alt="logo" fill />
          </div>
          <ul>
            <li>Ім’я прізвище</li>
            <li>Позиція, компанія</li>
          </ul>
          <div>“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</div>
        </li>
        <li className={`${styles.trust_wrap}`}>
          <div>
            <Image src="/none.png.webp" alt="logo" fill />
          </div>
          <ul>
            <li>Ім’я прізвище</li>
            <li>Позиція, компанія</li>
          </ul>
          <div>“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</div>
        </li>
        <li className={`${styles.trust_wrap}`}>
          <div>
            <Image src="/none.png.webp" alt="logo" fill />
          </div>
          <ul>
            <li>Ім’я прізвище</li>
            <li>Позиція, компанія</li>
          </ul>
          <div>“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</div>
        </li>
        <li className={`${styles.trust_wrap}`}>
          <div>
            <Image src="/none.png.webp" alt="logo" fill />
          </div>
          <ul>
            <li>Ім’я прізвище</li>
            <li>Позиція, компанія</li>
          </ul>
          <div>“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</div>
        </li>
        <li className={`${styles.trust_wrap}`}>
          <div>
            <Image src="/none.png.webp" alt="logo" fill />
          </div>
          <ul>
            <li>Ім’я прізвище</li>
            <li>Позиція, компанія</li>
          </ul>
          <div>“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</div>
        </li>
        <li className={`${styles.trust_wrap}`}>
          <div>
            <Image src="/none.png.webp" alt="logo" fill />
          </div>
          <ul>
            <li>Ім’я прізвище</li>
            <li>Позиція, компанія</li>
          </ul>
          <div>“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</div>
        </li>
      </ul>
      <Button size="Large" text="ХОЧУ ДОПОМОГТИ" />
    </div>
  );
}

export default TrustUs;
