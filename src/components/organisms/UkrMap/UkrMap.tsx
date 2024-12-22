"use client";

import Image from "next/image";
import styles from "./UkrMap.module.css";
import React, { useRef, useState } from "react";
import { useTranslations } from "next-intl";

interface ActiveVideo {
  videoOne: boolean;
  videoTwo: boolean;
  videoThree: boolean;
  videoFour: boolean;
}

function UkrMap() {
  const t = useTranslations("UkrMap");
  const videoRefs = {
    videoOne: useRef<HTMLVideoElement>(null),
    videoTwo: useRef<HTMLVideoElement>(null),
    videoThree: useRef<HTMLVideoElement>(null),
    videoFour: useRef<HTMLVideoElement>(null),
  };

  const [playingVideo, setPlayingVideo] = useState<
    keyof typeof videoRefs | null
  >(null);

  const [activeVideo, setActiveVideo] = useState<ActiveVideo>({
    videoOne: false,
    videoTwo: false,
    videoThree: false,
    videoFour: false,
  });

  const handlePlay = (videoName: keyof typeof videoRefs) => {
    videoRefs[videoName].current?.play();
    setPlayingVideo(videoName);
    setActiveVideo((prev) => ({ ...prev, [videoName]: true }));
  };

  const handlePause = (videoName: keyof typeof videoRefs) => {
    videoRefs[videoName].current?.pause();
    setActiveVideo((prev) => ({ ...prev, [videoName]: false }));
  };

  return (
    <div className={`${styles.ukr_map}`} id="ukr_map">
      <div>{t("title")}</div>
      <div className={`${styles.ukr_map_wrap}`}>
        <div>
          <Image src="/map.png.webp" alt="logo" fill />
        </div>
        <ul>
          <li>{t("description_p1")}</li>
          <li>{t("description_p2")}</li>
          <li>{t("description_p3")}</li>
        </ul>
      </div>
      {playingVideo && <div className="overlay"></div>}
      <div className={`${styles.ukr_map_last} ${playingVideo ? "hidden" : ""}`}>
        <div>{t("videoStories")}</div>
        <ul>
          {Object.keys(videoRefs).map((key) => {
            const videoName = key as keyof typeof videoRefs;
            const isPlaying = playingVideo === videoName;
            return (
              <li
                key={videoName}
                className={`video-container ${isPlaying ? "active" : ""}`}
                style={{
                  transition: "filter 0.3s ease",
                  cursor: "pointer",
                  position: isPlaying ? "fixed" : "relative",
                  left: isPlaying ? "50%" : "",
                  top: isPlaying ? "50%" : "",
                  transform: isPlaying ? "translate(-50%, -50%)" : "",
                  zIndex: isPlaying ? "999" : "",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.filter = "brightness(0.8)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.filter = "brightness(1)")
                }
                onClick={
                  activeVideo[videoName]
                    ? () => handlePause(videoName)
                    : () => handlePlay(videoName)
                }
              >
                <div
                  style={{
                    width: isPlaying ? "90vw" : "265px",
                    height: isPlaying ? "90vh" : "150px",
                    overflow: "hidden",
                    borderRadius: isPlaying ? "32px" : "16px",
                    transition: "width 0.3s ease, height 0.3s ease",
                    background: "gray",
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
                      objectFit: isPlaying ? "contain" : "cover",
                      objectPosition: isPlaying ? "" : "0% 20%",
                    }}
                  ></video>
                  {isPlaying ? (
                    <button
                      className={styles.trust_close}
                      onClick={() => setPlayingVideo(null)}
                    >
                      <Image src="/close.webp" alt="logo" fill sizes="auto" />
                    </button>
                  ) : null}
                </div>
                <div>
                  <button
                    className={
                      activeVideo[videoName]
                        ? `${styles.activeButton}`
                        : `${styles.defaultButton}`
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
