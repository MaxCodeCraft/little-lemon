import { Markazi_Text } from "next/font/google";
import { Karla } from "next/font/google";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import "./globals.css";

const markaziText = Markazi_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-markazi",
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-karla",
});

export const metadata = {
  title: "Little Lemon Restaurant",
  description:
    "Little Lemon Restaurant, Mediterranean food restaurant based in Chicago, IL.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
// <body className={`${karla.className} ${markaziText.variable}`}>
