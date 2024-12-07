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
          <Image src="/Home.png" alt="logo" width={532} height={445} />
        </li>
        <li>
          <Image src="/Ellipse1.png" alt="logo" width={182} height={182} />
          <Image src="/Ellipse2.png" alt="logo" width={205} height={205} />
          <Image src="/Ellipse3.png" alt="logo" width={231} height={235} />
        </li>
      </ul>
    </div>
  );
}

export default House;
