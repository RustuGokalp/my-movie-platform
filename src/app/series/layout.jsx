"use client";
import React, { useEffect, useState } from "react";
import "@/src/styles/reset.css";
import "@/src/styles/global.css";
import Pagination from "@/src/components/pagination";
import { usePathname } from "next/navigation";

export default function MoviesLayout({ children }) {
  const [isNotInSerieHome, setIsNotInSerieHome] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let slicedPath = pathname.split("/")?.length;
    slicedPath > 2 ? setIsNotInSerieHome(true) : setIsNotInSerieHome(false);
  }, [pathname]);

  return (
    <div>
      <main>{children}</main>
      {isNotInSerieHome && <Pagination />}
    </div>
  );
}
