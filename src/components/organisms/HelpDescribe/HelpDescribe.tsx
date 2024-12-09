import Image from "next/image";
import styles from "./HelpDescribe.module.css";
import React from "react";
import Button from "@/components/atoms/Button/Button";

function HelpDescribe() {
  return (
    <div className={`${styles.help_describe}`}>
      <div>
        Що отримають діти в ДОМІ
        <ul>
          <li>
            <div>
              <Image src="/benefit2.png.webp" alt="logo" fill />
            </div>
            <div>Фінансове забезпечення</div>
          </li>
          <li>
            <div>
              <Image src="/benefit1.png.webp" alt="logo" fill />
            </div>
            <div>Освіта</div>
          </li>
          <li>
            <div>
              <Image src="/benefit.png.webp" alt="logo" fill />
            </div>
            <div>Пихологічна підтримка</div>
          </li>
        </ul>
      </div>
      <div>
        Але не вистачає головного - викупу цього будинку.
        <br /> Для цього нам необхідно зібрати
        <br />5 000 000 грн до Нового року. Зробімо ДИВО дітям разом!
        <Button text="ХОЧУ ДОПОМОГТИ" size="Large" />
      </div>
    </div>
  );
}

export default HelpDescribe;
