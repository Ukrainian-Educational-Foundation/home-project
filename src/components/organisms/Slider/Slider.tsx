"use client";

import styles from "./Slider.module.css";
import React, { useState } from "react";

const Slider = () => {
  const [view, setView] = useState(0);

  const handlePrev = () => {
    if (view > 0) setView(view - 1);
  };

  const handleNext = () => {
    if (view < 3) setView(view + 1);
  };

  return (
    <div className={styles.slider}>
      <div>Ми знайшли його!</div>
      <div className={styles.slider_wrap}>
        <div
          className={styles.slider_container}
          style={{
            transform: `translateX(-${view * 1260}px)`,
          }}
        >
          <div className={styles.slide}>
            <div>
              Практично півроку ми шукали приміщення, що відповідало б нашим
              критеріям – велика територія, селище або на околицях міста, 2-3
              корпуса з можливістю додаткової забудови
            </div>
          </div>
          <div className={styles.slide}>
            <div>
              Це 2 га землі та 2000 кв метрів площі корпусів. Вже почалися
              роботи по зачищенню території.
            </div>
          </div>
          <div className={styles.slide}>
            <div>
              Практично півроку ми шукали приміщення, що відповідало б нашим
              критеріям – велика територія, селище або на околицях міста, 2-3
              корпуса з можливістю додаткової забудови
            </div>
          </div>
          <div className={styles.slide}>
            <div>
              Це 2 га землі та 2000 кв метрів площі корпусів. Вже почалися
              роботи по зачищенню території.
            </div>
          </div>
          <div className={styles.slide}>
            <div>
              Практично півроку ми шукали приміщення, що відповідало б нашим
              критеріям – велика територія, селище або на околицях міста, 2-3
              корпуса з можливістю додаткової забудови
            </div>
          </div>
          <div className={styles.slide}>
            <div>
              Це 2 га землі та 2000 кв метрів площі корпусів. Вже почалися
              роботи по зачищенню території.
            </div>
          </div>
          <div className={styles.slide}>
            <div>
              Практично півроку ми шукали приміщення, що відповідало б нашим
              критеріям – велика територія, селище або на околицях міста, 2-3
              корпуса з можливістю додаткової забудови
            </div>
          </div>
          <div className={styles.slide}>
            <div>
              Це 2 га землі та 2000 кв метрів площі корпусів. Вже почалися
              роботи по зачищенню території.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <button onClick={handlePrev} disabled={view === 0}></button>
        <button onClick={handleNext} disabled={view === 3}></button>
      </div>
    </div>
  );
};

export default Slider;
