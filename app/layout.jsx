import { Inter } from "@next/font/google";

import "@/styles/reset.css";
import "@/styles/global.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

const interFontFamily = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Netfilms",
  description:
    "Netfilms offers a vast collection of movies from various genres, including the latest releases and timeless classics. Discover, explore, and enjoy your favorite films with detailed descriptions, trailers, and personalized recommendations.",
  icons: {
    icon: "/image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={interFontFamily.className}>
      <body className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
