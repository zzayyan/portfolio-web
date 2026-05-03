"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./TextReveal.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * TextReveal — Wraps each child line in an overflow-hidden container
 * and animates them up from below with stagger.
 *
 * Usage:
 *   <TextReveal as="h2" className={styles.title}>
 *     SELECTED
 *     WORK
 *   </TextReveal>
 *
 * Or with explicit lines:
 *   <TextReveal lines={["SELECTED", "WORK"]} as="h2" className={styles.title} />
 */
export default function TextReveal({
  children,
  lines,
  as: Tag = "div",
  className = "",
  delay = 0,
  stagger = 0.08,
  duration = 0.8,
  triggerStart = "top 85%",
}) {
  const containerRef = useRef(null);

  // Resolve lines from either prop or children string
  const resolvedLines = lines || (typeof children === "string" ? children.split("\n") : []);

  useGSAP(
    () => {
      const lineEls = containerRef.current?.querySelectorAll("[data-reveal-line]");
      if (!lineEls?.length) return;

      gsap.to(lineEls, {
        y: 0,
        duration,
        ease: "expo.out",
        stagger,
        delay,
        scrollTrigger: {
          trigger: containerRef.current,
          start: triggerStart,
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef }
  );

  // If we have resolved lines, render them with reveal wrappers
  if (resolvedLines.length > 0) {
    return (
      <Tag ref={containerRef} className={className}>
        {resolvedLines.map((line, i) => (
          <span key={i} className={styles.revealWrapper}>
            <span data-reveal-line className={styles.revealLine}>
              {line}
            </span>
          </span>
        ))}
      </Tag>
    );
  }

  // Fallback: wrap children directly (single line)
  return (
    <Tag ref={containerRef} className={className}>
      <span className={styles.revealWrapper}>
        <span data-reveal-line className={styles.revealLine}>
          {children}
        </span>
      </span>
    </Tag>
  );
}
