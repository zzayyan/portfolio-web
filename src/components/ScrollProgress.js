"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./ScrollProgress.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollProgress() {
  const barRef = useRef(null);

  useGSAP(() => {
    gsap.to(barRef.current, {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
      },
    });
  });

  return (
    <div
      ref={barRef}
      className={styles.bar}
      role="progressbar"
      aria-label="Scroll progress"
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}
