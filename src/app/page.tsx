import Preview from "@/components/organisms/Preview/Preview";
import styles from "./page.module.css";
import OurSupport from "@/components/organisms/OurSupport/OurSupport";
import UkrMap from "@/components/organisms/UkrMap/UkrMap";
import OldLady from "@/components/organisms/OldLady/OldLady";
import Slider from "@/components/organisms/Slider/Slider";
import HelpDescribe from "@/components/organisms/HelpDescribe/HelpDescribe";

export default function Home() {
  return (
    <div className={styles.page}>
      <Preview />
      <OurSupport />
      <UkrMap />
      <OldLady />
      <Slider />
      <HelpDescribe />
    </div>
  );
}
