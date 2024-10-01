"use client";
import React, { useEffect, useState } from "react";
import "@/src/styles/reset.css";
import "@/src/styles/global.css";
import Pagination from "@/src/components/pagination";
import { usePathname } from "next/navigation";

export default function MoviesLayout({ children }) {
  const [isNotInMovieHome, setIsNotInMovieHome] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let slicedPath = pathname.split("/")?.length;
    slicedPath > 2 ? setIsNotInMovieHome(true) : setIsNotInMovieHome(false);
  }, [pathname]);

  return (
    <div>
      <main>{children}</main>
      {isNotInMovieHome && <Pagination />}
    </div>
  );
}
