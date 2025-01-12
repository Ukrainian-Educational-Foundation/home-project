import React from "react";
import Image from "next/image";
import styles from "./VideoSlide.module.css";

interface VideoSlideProps {
  video: string;
  photo: string;
  isActive: boolean;
  onPlay: () => void;
}

const VideoSlide: React.FC<VideoSlideProps> = ({
  video,
  photo,
  isActive,
  onPlay,
}) => {
  return (
    <div className={styles.slide_video_container}>
      {!isActive && photo && (
        <div className={styles.slide_photo_container}>
          <Image
            src={photo}
            alt="photo"
            width="100"
            height="100"
            className={styles.slide_video_photo}
          />
          <Image
            src="/play.png.webp"
            alt="play"
            width="64"
            height="64"
            className={styles.slide_video_play}
            onClick={onPlay}
          />
        </div>
      )}
      {isActive && video && (
        <div className={styles.video}>
          <video
            width="100%"
            height="100%"
            controls
            preload="none"
            className={styles.slide_video}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoSlide;
