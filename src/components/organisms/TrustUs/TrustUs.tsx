"use client";

import Button from "@/components/atoms/Button/Button";
import styles from "./TrustUs.module.css";
import React, { useState } from "react";
import Image from "next/image";
import { dataSlideTrust } from "@/data/dataSlideTrust";

function TrustUs() {
  const [center, setCenter] = useState<number>(1);
  const [view, setView] = useState(0);

  const moveLeft = () => {
    if (view < 0) {
      setView(view + 440);
      setCenter(center - 1);
    }
  };

  const moveRight = () => {
    if (view > -3140) {
      setView(view - 440);
      setCenter(center + 1);
    }
  };

  return (
    <div className={styles?.trust}>
      <div>Нам довіряють</div>
      <div className={styles?.trust_wrap}>
        <ul
          style={{
            position: "relative",
            left: `${view}px`,
            transition: "300ms",
          }}
        >
          {dataSlideTrust.length > 0 ? (
            dataSlideTrust.map((item, index) => (
              <li
                key={index}
                className={
                  center === index
                    ? styles.trust_center
                    : center + 1 === index
                    ? styles.trust_right
                    : center - 1 === index
                    ? styles.trust_left
                    : styles.trust_card
                }
                style={{
                  position: "relative",
                  right:
                    index === center + 1
                      ? "120px"
                      : index === center
                      ? "60px"
                      : "",
                }}
                onClick={
                  index === center - 1
                    ? moveLeft
                    : index === center + 1
                    ? moveRight
                    : () => {}
                }
              >
                <div className={styles?.trust_logo_wrap}>
                  <div
                    style={{
                      width: item.width,
                      height: item.height,
                      position: "relative",
                    }}
                  >
                    <Image src={item.logo} alt="logo" fill sizes="auto" />
                  </div>
                </div>
                <div>{item.comments}</div>
              </li>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </ul>
      </div>
      <Button size="Large" text="ХОЧУ ДОПОМОГТИ" />
    </div>
  );
}

export default TrustUs;
