"use client";

import styles from "./AboutFond.module.css";
import React, { useState } from "react";
import { data } from "@/data/data";
import Image from "next/image";

function AboutFond() {
  const [view, setView] = useState(0);

  const handlePrev = () => {
    if (view < 0) setView(view + 186);
  };

  const handleNext = () => {
    if (view > -774) setView(view - 186);
  };
  return (
    <div className={`${styles.about_fond}`}>
      <div>Про фонд</div>
      <ul>
        <li>
          <div>10</div>
          <div>
            років
            <br />
            працює наш фонд
          </div>
        </li>
        <li>
          <div>6</div>
          <div>проектів реалізовано</div>
        </li>
        <li>
          <div>86</div>
          <div>
            поїздок
            <br />у прифронтові зони
          </div>
        </li>
        <li>
          <div>20 000</div>
          <div>дітей під опікою</div>
        </li>
      </ul>
      <div className={`${styles.about_fond_team}`}>
        <div>Наша команда</div>
        <div>
          <button onClick={handlePrev} disabled={view === 0}>
            <Image src="/arrow-left.png" alt="logo" width={80} height={80} />
          </button>
          <div className={`${styles.about_fond_wrap}`}>
            <ul
              style={{
                position: "relative",
                left: `${view}px`,
                transition: "300ms",
              }}
            >
              {data.length > 0 ? (
                data.map((human, index) => (
                  <li key={index}>
                    <div>
                      <Image
                        src={human.photo || "/user.png"}
                        alt={human.name || "No photo available"}
                        width={104}
                        height={104}
                        priority={index === 0}
                        style={{
                          objectPosition:
                            data.length === index + 1 ? "0px -10px" : "50% 50%",
                        }}
                      />
                    </div>
                    <div className={`${styles.about_fond_card}`}>
                      <div>{human.name}</div>
                      <div>{human.position}</div>
                    </div>
                  </li>
                ))
              ) : (
                <div>loading...</div>
              )}
            </ul>
          </div>
          <button onClick={handleNext} disabled={view === 3}>
            <Image src="/arrow-right.png" alt="logo" width={80} height={80} />
          </button>
        </div>
      </div>
      <div className={`${styles.about_fond_last}`}>
        <div>Медіа про нас</div>
        <ul>
          <li>
            <Image src="/news.png" alt="logo" width={218} height={118} />
          </li>
          <li>
            <Image src="/news.png" alt="logo" width={218} height={118} />
          </li>
          <li>
            <Image src="/news.png" alt="logo" width={218} height={118} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutFond;
