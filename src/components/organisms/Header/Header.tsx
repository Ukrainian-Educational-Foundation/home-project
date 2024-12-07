import Button from "@/components/atoms/Button/Button";
import styles from "./Header.module.css";

import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className={`${styles.header}`}>
      <div>
        <Image src="/Fund_logo1.png" alt="logo" width={180} height={60} />
      </div>
      <div className={`${styles.buttons}`}>
        <button>Головна</button>
        <button>Про проект</button>
        <button>Про фонд</button>
        <button>Контакти</button>
      </div>
      <div>
        <Button text="ХОЧУ ДОПОМОГТИ" size="Small" />
        <ul>
          <li>
            <button>UA</button>
          </li>
          <li className="line"></li>
          <li>
            <button>EN</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
