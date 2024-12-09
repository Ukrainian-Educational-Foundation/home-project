import Image from "next/image";
import styles from "./OurSupport.module.css";
import React from "react";

function OurSupport() {
  return (
    <div className={`${styles.our_suppurt}`}>
      <div className={`${styles.our_suppurt_wrap}`}>
        <div>Компанії, що підтримують нас:</div>
        <ul>
          <li>
            <div>
              <Image src="/hau.png.webp" alt="logo" fill />
            </div>
          </li>
          <li>
            <div>
              <Image src="/univest.png.webp" alt="logo" fill />
            </div>
          </li>
          <li>
            <div>
              <Image src="/razom.png.webp" alt="logo" fill />
            </div>
          </li>
          <li>
            <div>
              <Image src="/12security.webp" alt="logo" fill />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OurSupport;
