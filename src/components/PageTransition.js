"use client";

import { useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./PageTransition.module.css";

gsap.registerPlugin(useGSAP);

/**
 * PageTransition — Wraps page content with a fade + slide-up entrance
 * and provides an overlay wipe effect on page mount.
 */
export default function PageTransition({ children }) {
  const wrapperRef = useRef(null);
  const overlayRef = useRef(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Overlay wipe out (slide up to reveal content)
      tl.to(overlayRef.current, {
        scaleY: 0,
        duration: 0.5,
        ease: "expo.inOut",
        transformOrigin: "top center",
      });

      // Content fade in
      tl.to(
        wrapperRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "expo.out",
        },
        "-=0.3"
      );
    },
    { dependencies: [pathname] }
  );

  return (
    <>
      {/* Transition overlay */}
      <div ref={overlayRef} className={styles.overlay} />
      <div
        ref={wrapperRef}
        className={styles.wrapper}
        style={{ transform: "translateY(12px)" }}
      >
        {children}
      </div>
    </>
  );
}
