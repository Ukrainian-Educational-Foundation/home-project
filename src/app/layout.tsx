import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/organisms/Header/Header";
import Footer from "../components/organisms/Footer/Footer";

const Onest = localFont({
  src: "./fonts/Onest/static/Onest-Regular.ttf",
  variable: "--font-onest",
  weight: "400",
});

const Bitter = localFont({
  src: "./fonts/Bitter/static/Bitter-Regular.ttf",
  variable: "--font-bitter",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Onest.variable} ${Bitter.variable}`}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
