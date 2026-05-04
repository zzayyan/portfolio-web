"use client";

import { motion } from "framer-motion";
import styles from "./PageTransition.module.css";

/**
 * PageTransition — Wraps page content with a fade + slide-up entrance
 * and an overlay wipe effect on page mount.
 */
export default function PageTransition({ children }) {
  return (
    <>
      {/* Transition overlay — wipes up to reveal */}
      <motion.div
        className={styles.overlay}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Content — fades in + slides up */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
}
