"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
};

export default function Hero() {
  const today = new Date().toISOString().split("T")[0];

  return (
    <section className={`${styles.hero} section-light`}>
      {/* 2.1 — Primary Headline */}
      <motion.h1 {...fadeUp} className={styles.headline}>
        BUILDING
        <br />
        SYSTEMS
        <br />
        THAT THINK.
      </motion.h1>

      {/* 2.2 — Annotation Strip */}
      <motion.aside
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.08 }}
        className={styles.annotation}
        aria-label="Portfolio metadata"
      >
        <span>PORTFOLIO v3.1</span>
        <span className={styles.annotationDivider}>──────────────</span>
        <span className={styles.annotationLabel}>DISCIPLINE</span>
        <span className={styles.annotationValue}>AI ENGINEERING</span>
        <span className={styles.annotationValue}>RAG / AGENTS</span>
        <span className={styles.annotationValue}>MULTI-SYSTEM</span>
        <span className={styles.annotationLabel}>LOCATION</span>
        <span className={styles.annotationValue}>[CITY, COUNTRY]</span>
        <span className={styles.annotationLabel}>LAST UPDATED</span>
        <span className={styles.annotationValue}>{today}</span>
      </motion.aside>

      {/* 2.3 — Role Descriptor */}
      <motion.p
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.16 }}
        className={styles.roleDescriptor}
      >
        RAG Architectures — Generative AI Frameworks — Multi-Agent Systems
      </motion.p>

      {/* 2.4 — Bottom Anchor Bar */}
      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.24 }}
        className={styles.anchorBar}
      >
        <span>SCROLL TO EXPLORE ↓</span>
        <span>001 / HERO</span>
      </motion.div>
    </section>
  );
}
