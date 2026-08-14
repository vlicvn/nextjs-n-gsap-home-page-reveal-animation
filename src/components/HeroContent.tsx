"use client";

import React from "react";

export default function HeroContent() {
  return (
    <div className="content absolute left-0 top-0 h-full w-0 bg-[#121212] z-20 flex items-center justify-center flex-col overflow-hidden text-white px-4 sm:px-8">
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto text-center">
        <p className="title-lines text-[clamp(1.2rem,3.5vw,104px)] font-medium m-0 opacity-0 hidden leading-tight">
          The greatest glory in living lies
        </p>
        <p className="title-lines text-[clamp(1.2rem,3.5vw,104px)] font-medium m-0 opacity-0 hidden leading-tight">
          not in never falling,
        </p>
        <p className="title-lines text-[clamp(1.2rem,3.5vw,104px)] font-medium m-0 opacity-0 hidden leading-tight">
          but in rising every time we fall.
        </p>
        <p className="title-lines text-[clamp(1rem,2.5vw,64px)] font-medium m-0 opacity-0 hidden mt-4 text-[#f48049]">
          -Nelson Mandela
        </p>
      </div>
    </div>
  );
}
