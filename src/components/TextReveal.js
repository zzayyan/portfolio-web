"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./TextReveal.module.css";

/**
 * TextReveal — Wraps each child line in an overflow-hidden container
 * and animates them up from below with stagger.
 *
 * Usage:
 *   <TextReveal as="h2" lines={["SELECTED", "WORK"]} className={styles.title} />
 */
export default function TextReveal({
  children,
  lines,
  as: Tag = "div",
  className = "",
  delay = 0,
  stagger = 0.08,
  duration = 0.8,
}) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-15% 0px" });

  // Resolve lines from either prop or children string
  const resolvedLines =
    lines || (typeof children === "string" ? children.split("\n") : []);

  if (resolvedLines.length > 0) {
    return (
      <Tag ref={containerRef} className={className}>
        {resolvedLines.map((line, i) => (
          <span key={i} className={styles.revealWrapper}>
            <motion.span
              className={styles.revealLine}
              initial={{ y: "110%" }}
              animate={isInView ? { y: 0 } : { y: "110%" }}
              transition={{
                duration,
                ease: [0.16, 1, 0.3, 1], // expo.out
                delay: delay + i * stagger,
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </Tag>
    );
  }

  // Fallback: wrap children directly (single line)
  return (
    <Tag ref={containerRef} className={className}>
      <span className={styles.revealWrapper}>
        <motion.span
          className={styles.revealLine}
          initial={{ y: "110%" }}
          animate={isInView ? { y: 0 } : { y: "110%" }}
          transition={{
            duration,
            ease: [0.16, 1, 0.3, 1],
            delay,
          }}
        >
          {children}
        </motion.span>
      </span>
    </Tag>
  );
}
