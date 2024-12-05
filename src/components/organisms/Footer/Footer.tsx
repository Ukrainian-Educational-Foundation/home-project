import Image from "next/image";
import styles from "./Footer.module.css";
import React from "react";
import Button from "@/components/atoms/Button/Button";

function Footer() {
  return (
    <div className={`${styles.footer}`}>
      <div className={`${styles.footer_main}`}>
        <Image src="/Fund_logo.png" alt="logo" width={180} height={60} />
        <div>
          Наша місія - змінювати життя дітей (евакуювати, знаходити житло,
          <br />
          лікувати, одягати, навчати). Робити щоденні маленькі зміни, що <br />
          призводять до якісної зміни життя дітей в Україні.
        </div>
        <Button text="ХОЧУ ДОПОМОГТИ" size="Small" />
      </div>
      <div>
        developed by Team Challenge
        <Image src="/element.png" alt="logo" width={24} height={24} /> 2024
      </div>
    </div>
  );
}

export default Footer;
