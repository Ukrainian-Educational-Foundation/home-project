import Image from "next/image";
import styles from "./OurSupport.module.css";
import React from "react";

function OurSupport() {
  const logos = [
    "/hau.png.webp",
    "/univest.png.webp",
    "/razom.png.webp",
    "/12security.webp",
    "/images-removebg-preview-1.png.webp",
    "/fajne-misto-3-1.png.webp",
    "/bce.webp",
    "/img_20240906_200246_832-300x99-3.png.webp",
    "/Devik.png.webp",
    "/bosch-logo.png.webp",
    "/Слой_x0020_1.png.webp",
    "/rehau-logo-1.png.webp",
  ];

  const duplicatedLogos = [...logos];

  return (
    <div className={styles.our_suppurt}>
      <div className={styles.our_suppurt_wrap}>
        <div>Компанії, що підтримують нас:</div>
        <ul>
          {duplicatedLogos.map((src, index) => (
            <li key={index}>
              <div>
                <Image src={src} alt="logo" fill />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default OurSupport;
