"use client";

import React, { useState, useEffect } from "react";
import { gsap, CSSPlugin, Expo } from "gsap";
import Preloader from "./Preloader";
import HeroContent from "./HeroContent";

gsap.registerPlugin(CSSPlugin);

export default function PreloaderAnimation() {
  const [counter, setCounter] = useState(0);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });

    t1.to(".follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      // Orijinal akış: Sadece yüksekliği %100 yapıyoruz
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      // Çizgi tam açıldığı an ufak boşluk kalmaması için dış hatları tam kaplatıyoruz
      .set(".follow", {
        top: "0px",
        bottom: "0px",
        transform: "none",
      })
      .to(".content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
      .to(".title-lines", { display: "block", duration: 0.1 })
      .to(".title-lines", {
        opacity: 1,
        stagger: 0.15,
        ease: Expo.easeInOut,
        duration: 0.6,
      });
  };

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter < 100) {
          return prevCounter + 1;
        } else {
          clearInterval(count);
          reveal();
          return 100;
        }
      });
    }, 25);

    return () => clearInterval(count);
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-dvh overflow-hidden text-black bg-white select-none m-0 p-0 left-0 top-0">
      <Preloader counter={counter} />
      <HeroContent />
    </div>
  );
}