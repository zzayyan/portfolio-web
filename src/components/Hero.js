"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Hero.module.css";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from("[data-hero-animate]", {
        opacity: 0,
        y: 24,
        duration: 0.4,
        ease: "expo.out",
        stagger: 0.08,
      });
    },
    { scope: containerRef }
  );

  const today = new Date().toISOString().split("T")[0];

  return (
    <section ref={containerRef} className={`${styles.hero} section-light`}>
      {/* 2.1 — Primary Headline */}
      <h1 data-hero-animate className={styles.headline}>
        BUILDING
        <br />
        SYSTEMS
        <br />
        THAT THINK.
      </h1>

      {/* 2.2 — Annotation Strip */}
      <aside data-hero-animate className={styles.annotation} aria-label="Portfolio metadata">
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
      </aside>

      {/* 2.3 — Role Descriptor */}
      <p data-hero-animate className={styles.roleDescriptor}>
        RAG Architectures — Generative AI Frameworks — Multi-Agent Systems
      </p>

      {/* 2.4 — Bottom Anchor Bar */}
      <div data-hero-animate className={styles.anchorBar}>
        <span>SCROLL TO EXPLORE ↓</span>
        <span>001 / HERO</span>
      </div>
    </section>
  );
}
