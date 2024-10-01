import { Inter } from "@next/font/google";
import "@/src/styles/reset.css";
import "@/src/styles/global.css";
import Pagination from "@/src/components/pagination";
const interFontFamily = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Netfilms Movies",
  description:
    "Netfilms offers a vast collection of movies from various genres, including the latest releases and timeless classics. Discover, explore, and enjoy your favorite films with detailed descriptions, trailers, and personalized recommendations.",
  icons: {
    icon: "/image.png",
  },
};

export default function MoviesLayout({ children }) {
  return (
    <div>
      <main>{children}</main>
      <Pagination />
    </div>
  );
}
