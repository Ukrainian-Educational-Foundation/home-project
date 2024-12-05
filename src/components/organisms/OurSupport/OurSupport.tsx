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
            <Image src="/hau.png" alt="logo" width={122.97} height={35.05} />
          </li>
          <li>
            <Image src="/univest.png" alt="logo" width={135.77} height={48} />
          </li>
          <li>
            <Image src="/razom.png" alt="logo" width={137.79} height={54} />
          </li>
          <li>
            <Image src="/12security.png" alt="logo" width={144} height={48} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default OurSupport;
