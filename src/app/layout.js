import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import { Poppins } from "next/font/google";



import { DM_Sans, Outfit, Sora, Urbanist, Barlow } from "next/font/google";

// ✅ Each font needs explicit weights
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // add what you need
  variable: "--font-dm-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-outfit",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"], // all weights
  variable: "--font-poppins",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-urbanist",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700","300"], // 👈 fix: pick from 100–900
  variable: "--font-barlow",
});

export const metadata = {
  title: "Next.js + Bootstrap",
  description: "Setup Bootstrap in Next.js 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${outfit.variable} ${sora.variable} ${urbanist.variable} ${barlow.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
