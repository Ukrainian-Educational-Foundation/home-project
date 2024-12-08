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
            <Image src="/Vector-l.png" alt="logo" width={86} height={88} />
          </li>
          <li>
            Будемо раді почути
            <Image src="/Vector-c.png" alt="logo" width={206} height={68} />
          </li>
          <li>
            Будь з нами в соцмережах
            <Image src="/Vector-r.png" alt="logo" width={60} height={89} />
          </li>
        </ul>
        <ul>
          <li className={`${styles.contact_email}`}>
            <Image
              src="/mail.png"
              alt="logo"
              width={24}
              height={24}
              layout="intrinsic"
            />
            ukraine.ef@gmail.com
          </li>
          <li className={`${styles.contact_phone}`}>
            <Image src="/phone-call.png" alt="logo" width={24} height={24} />
            +380 68 338 68 70
          </li>
          <li className={`${styles.contact_social}`}>
            <button>
              <Image src="/FB.png" alt="logo" width={32} height={32} />
            </button>
            <button>
              <Image src="/Linkedin.png" alt="logo" width={32} height={32} />
            </button>
            <button>
              <Image src="/Telegram.png" alt="logo" width={32} height={32} />
            </button>
            <button>
              <Image src="/Instagram.png" alt="logo" width={32} height={32} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactUs;
