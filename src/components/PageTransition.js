"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./PageTransition.module.css";

gsap.registerPlugin(useGSAP);

/**
 * PageTransition — Wraps page content with a fade + slide-up entrance.
 * Used in layout.js to animate page mounts.
 */
export default function PageTransition({ children }) {
  const wrapperRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(wrapperRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "expo.out",
      });
    },
    { scope: wrapperRef }
  );

  return (
    <div
      ref={wrapperRef}
      className={styles.wrapper}
      style={{ transform: "translateY(12px)" }}
    >
      {children}
    </div>
  );
}
