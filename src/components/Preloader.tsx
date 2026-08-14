"use client";

import React from "react";

interface PreloaderProps {
  counter: number;
}

export default function Preloader({ counter }: PreloaderProps) {
  return (
    <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-[#121212] overflow-hidden">
      {/* Turuncu Açılma Çizgisi (Optik merkez için küçük bir ayar eklendi) */}
      <div className="follow absolute left-0 top-[calc(50%+4px)] -translate-y-1/2 h-1 w-0 bg-[#f48049] z-20"></div>

      {/* Progress Bar */}
      <div
        className="hide absolute left-0 top-[calc(50%+4px)] -translate-y-1/2 bg-white h-0.5 transition-all duration-75 ease-out z-10"
        style={{ width: `${counter}%` }}
      ></div>

      {/* Counter */}
      <div className="hide absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex items-center justify-center select-none">
        <p className="text-[clamp(4rem,15vw,130px)] text-white font-medium text-center leading-none">
          {counter}%
        </p>
      </div>
    </div>
  );
}