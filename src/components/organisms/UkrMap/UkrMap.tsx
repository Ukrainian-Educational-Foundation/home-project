"use client";

import Image from "next/image";
import styles from "./UkrMap.module.css";
import React, { useRef, useState } from "react";

interface ActiveVideo {
  videoOne: boolean;
  videoTwo: boolean;
  videoThree: boolean;
  videoFour: boolean;
}

function UkrMap() {
  const videoRefs = {
    videoOne: useRef<HTMLVideoElement>(null),
    videoTwo: useRef<HTMLVideoElement>(null),
    videoThree: useRef<HTMLVideoElement>(null),
    videoFour: useRef<HTMLVideoElement>(null),
  };

  const [activeVideo, setActiveVideo] = useState<ActiveVideo>({
    videoOne: false,
    videoTwo: false,
    videoThree: false,
    videoFour: false,
  });

  const handlePlay = (videoName: keyof typeof videoRefs) => {
    videoRefs[videoName].current?.play();
    setActiveVideo((prev) => ({ ...prev, [videoName]: true }));
  };

  const handlePause = (videoName: keyof typeof videoRefs) => {
    videoRefs[videoName].current?.pause();
    setActiveVideo((prev) => ({ ...prev, [videoName]: false }));
  };

  return (
    <div className={`${styles.ukr_map}`} id="ukr_map">
      <div>
        На прифронтових територіях України проживають діти, які втратили
        <br /> своїх батьків, та перебувають під опікою людей похилого віку
        <br /> (70+ років), яким не під силу забезпечити їх як фізично та
        фінансово,
        <br /> так і надати їм психологічну підтримку та належне виховання.
      </div>
      <div className={`${styles.ukr_map_wrap}`}>
        <div>
          <Image src="/map.png.webp" alt="logo" fill />
        </div>
        <ul>
          <li>
            До прикладу, у нашого фонду під опікою хлопчик Влад з Лиману,
            Донецької області, йому 7 років. На його очах загинула мама. Ми
            евакуювали дитину з бабусею до Білої Церкви, ми орендуємо житло,
            возимо його 2 рази на тиждень до психолога. Повністю забезпечуємо
            продуктами, лікуванням та одягом.
          </li>
          <li>
            На прикладі Влада ми зрозуміли, що потрібно створити місце, де такі
            діти могли б жити та отримувати комплексну допомогу до повноліття. А
            опікуни продовжили б жити і після повноліття дитини.
          </li>
          <li>Історія Влада це лише одна з тисяч таких історій.</li>
        </ul>
      </div>
      <div className={`${styles.ukr_map_last}`}>
        <div>Подивіться відеоісторії наших підопічних:</div>
        <ul>
          {Object.keys(videoRefs).map((key) => {
            const videoName = key as keyof typeof videoRefs;
            return (
              <li key={videoName}>
                <div
                  style={{
                    width: "265px",
                    height: "150px",
                    overflow: "hidden",
                    borderRadius: "16px",
                  }}
                >
                  <video
                    ref={videoRefs[videoName]}
                    src="/flag.webm"
                    loop
                    muted
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "0% 20%",
                    }}
                  ></video>
                </div>
                <div>
                  <button
                    className={
                      activeVideo[videoName]
                        ? `${styles.activeButton}`
                        : `${styles.defaultButton}`
                    }
                    onClick={
                      activeVideo[videoName]
                        ? () => handlePause(videoName)
                        : () => {
                            handlePlay(videoName);
                            console.log(activeVideo[videoName]);
                          }
                    }
                  ></button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default UkrMap;
