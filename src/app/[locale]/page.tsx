import styles from "./page.module.css";
import Preview from "@/components/organisms/Preview/Preview";
import OurSupport from "@/components/organisms/OurSupport/OurSupport";
import UkrMap from "@/components/organisms/UkrMap/UkrMap";
import OldLady from "@/components/organisms/OldLady/OldLady";
import Slider from "@/components/organisms/Slider/Slider";
import HelpDescribe from "@/components/organisms/HelpDescribe/HelpDescribe";
import House from "@/components/organisms/House/House";
import AboutFond from "@/components/organisms/AboutFond/AboutFond";
import TrustUs from "@/components/organisms/TrustUs/TrustUs";
import ContactUs from "@/components/organisms/ContactUs/ContactUs";


export default function Home() {
  return (
    <div className={styles.page}>
      <Preview />
      <OurSupport />
      <UkrMap />
      <OldLady />
      <Slider />
      <HelpDescribe />
      <House />
      <AboutFond/>
      <TrustUs />
      <ContactUs />
    </div>
  );
}
