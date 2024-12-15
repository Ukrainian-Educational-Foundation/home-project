import Image from "next/image";
import styles from "./Footer.module.css";
import React from "react";
import Button from "@/components/atoms/Button/Button";

function Footer() {
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.footer_main}`}>
        <div>
          <Image
            src="/Fund_logo1.png.webp"
            alt="logo"
            fill
            sizes="auto, auto"
          />
        </div>
        <div>
          Наша місія - змінювати життя дітей (евакуювати, знаходити житло,
          <br />
          лікувати, одягати, навчати). Робити щоденні маленькі зміни, що <br />
          призводять до якісної зміни життя дітей в Україні.
        </div>
        <Button text="ХОЧУ ДОПОМОГТИ" size="Small" />
      </div>
      <div>
        <a
          href="https://teamchallenge.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          developed by Team Challenge
          <div>
            <Image src="/element.png.webp" alt="logo" fill sizes="auto, auto" />
          </div>
          &nbsp;&nbsp;&nbsp;2024
        </a>
      </div>
    </div>
  );
}

export default Footer;
