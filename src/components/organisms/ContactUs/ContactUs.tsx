import Image from "next/image";
import styles from "./ContactUs.module.css";
import React from "react";

function ContactUs() {
  return (
    <div className={`${styles.contact}`}>
      <div>ЗВ’ЯЖИСЬ З НАМИ</div>
      <div>
        <ul className={`${styles.contact_headers}`}>
          <li>
            Залиш повідомлення
            <div>
              <Image src="/Vector-l.png.webp" alt="logo" fill />
            </div>
          </li>
          <li>
            Будемо раді почути
            <div>
              <Image src="/Vector-c.png.webp" alt="logo" fill />
            </div>
          </li>
          <li>
            Будь з нами в соцмережах
            <div>
              <Image src="/Vector-r.png.webp" alt="logo" fill />
            </div>
          </li>
        </ul>
        <ul>
          <li className={`${styles.contact_email}`}>
            <div>
              <Image
                src="/mail.png.webp"
                alt="logo"
                fill
              />
            </div>
            ukraine.ef@gmail.com
          </li>
          <li className={`${styles.contact_phone}`}>
            <div>
              <Image src="/phone-call.png.webp" alt="logo" fill />
            </div>
            +380 68 338 68 70
          </li>
          <li className={`${styles.contact_social}`}>
            <button>
              <Image src="/FB.png.webp" alt="logo" fill />
            </button>
            <button>
              <Image src="/Linkedin.png.webp" alt="logo" fill />
            </button>
            <button>
              <Image src="/Telegram.png.webp" alt="logo" fill />
            </button>
            <button>
              <Image src="/Instagram.png.webp" alt="logo" fill />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactUs;
