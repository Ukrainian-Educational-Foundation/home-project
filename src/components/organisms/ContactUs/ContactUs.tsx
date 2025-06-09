"use client";

import Image from "next/image";
import styles from "./ContactUs.module.css";
import React, { useState } from "react";
import CopyNotification from "@/components/atoms/CopyToClipboard/CopyToClipboard";
import { useTranslations } from "next-intl";

function ContactUs() {
  const t = useTranslations("ContactUs");
  const phoneNumber = "+380 68 338 68 70";
  const [showNotification, setShowNotification] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Помилка при копіюванні: ", error);
      });
  };

  return (
    <div className={`${styles.contact}`} id="contact">
      <div>{t("contactUS")}</div>
      <p className={styles.description}>{t("description")}</p>
      <div>
        <ul className={`${styles.contact_headers}`}>
          <li>
            {t("LeaveMessage")}
            <div>
              <Image
                src="/Vector-l.png.webp"
                alt="logo"
                fill
                sizes="auto, auto"
              />
            </div>
          </li>
          <li>
            {t("fromYou")}
            <div>
              <Image
                src="/Vector-c.png.webp"
                alt="logo"
                fill
                sizes="auto, auto"
              />
            </div>
          </li>
          <li>
            {t("media")}
            <div>
              <Image
                src="/Vector-r.png.webp"
                alt="logo"
                fill
                sizes="auto, auto"
              />
            </div>
          </li>
        </ul>
        <ul>
          <li className={`${styles.contact_email}`}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ukraine.ef@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div>
                <Image
                  src="/mail.png.webp"
                  alt="logo"
                  fill
                  sizes="auto, auto"
                />
              </div>
              ukraine.ef@gmail.com
            </a>
          </li>
          <li className={`${styles.contact_phone}`} onClick={copyToClipboard}>
            <div>
              <Image
                src="/phone-call.png.webp"
                alt="logo"
                fill
                sizes="auto, auto"
              />
            </div>
            {phoneNumber}
            <CopyNotification showNotification={showNotification} />
          </li>
          <li className={`${styles.contact_social}`}>
            <a
              href="https://www.facebook.com/profile.php?id=61567044907772"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <Image
                  // src="/FB.png.webp"
                  src="/FB_icon.svg"
                  alt="logo"
                  fill
                  sizes="auto, auto"
                />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/company/%D1%83%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B0-%D0%BE%D1%81%D0%B2%D1%96%D1%82%D0%BD%D1%8F-%D1%84%D1%83%D0%BD%D0%B4%D0%B0%D1%86%D1%96%D1%8F/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <Image
                  // src="/Linkedin.png.webp"
                  src="/Linkedin_icon.svg"
                  alt="logo"
                  fill
                  sizes="auto, auto"
                />
              </button>
            </a>
            <a
              href="https://t.me/ukrainedf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <Image
                  // src="/Telegram.png.webp"
                  src="/Telegram_icon.svg"
                  alt="logo"
                  fill
                  sizes="auto, auto"
                />
              </button>
            </a>
            <a
              href="https://www.instagram.com/dim.dityam?igsh=MTVrcDdhMDB0djNuOA%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <Image
                  // src="/Instagram.png.webp"
                  src="/Instagram_icon.svg"
                  alt="logo"
                  fill
                  sizes="(max-width: 768px) 32px, (max-width: 1024px) 48px, 64px"
                />
              </button>
            </a>
            <a
              href="https://whatsapp.com/channel/0029Vb3GUYK89iniCX5fKX2K"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <Image
                  src="/Whatsapp.svg"
                  alt="logo"
                  fill
                  sizes="(max-width: 768px) 32px, (max-width: 1024px) 48px, 64px"
                />
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactUs;
