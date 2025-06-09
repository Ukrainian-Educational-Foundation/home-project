import React, { Suspense } from "react";
import styles from "./page.module.css";
const ReadyHome = React.lazy(
  () => import("@/components/organisms/ReadyHome/ReadyHome")
);
const DevelopmentDIM = React.lazy(
  () => import("@/components/organisms/DevelopmentDIM/DevelopmentDIM")
);
const OurMission = React.lazy(
  () => import("@/components/organisms/OurMission/OurMission")
);
const QRCode = React.lazy(() => import("@/components/organisms/QRCode/QRCode"));
const Preview = React.lazy(
  () => import("@/components/organisms/Preview/Preview")
);
const OurSupport = React.lazy(
  () => import("@/components/organisms/OurSupport/OurSupport")
);
const OldLady = React.lazy(
  () => import("@/components/organisms/OldLady/OldLady")
);
// const Slider = React.lazy(() => import("@/components/organisms/Slider/Slider"));
const HelpDescribe = React.lazy(
  () => import("@/components/organisms/HelpDescribe/HelpDescribe")
);
// const House = React.lazy(() => import("@/components/organisms/House/House"));
const AboutFond = React.lazy(
  () => import("@/components/organisms/AboutFond/AboutFond")
);
const UkrMap = React.lazy(() => import("@/components/organisms/UkrMap/UkrMap"));
const TrustUs = React.lazy(
  () => import("@/components/organisms/TrustUs/TrustUs")
);
const ContactUs = React.lazy(
  () => import("@/components/organisms/ContactUs/ContactUs")
);

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={styles.page}>
        <Preview />
        <OurSupport />
        <UkrMap />
        <ReadyHome />
        <OldLady />
        <QRCode />
        {/* <Slider /> */}
        <HelpDescribe />
        <QRCode />
        <DevelopmentDIM />
        {/* <House /> */}
        <AboutFond />
        <TrustUs />
        <OurMission />
        <QRCode />
        <ContactUs />
      </div>
    </Suspense>
  );
}
