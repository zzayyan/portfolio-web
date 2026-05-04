"use client";

import { useState, useEffect } from "react";
import styles from "./SectionIndicator.module.css";

const SECTIONS = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "education", label: "EDUCATION" },
  { id: "contact", label: "CONTACT" },
];

export default function SectionIndicator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  /* Show indicator only after user scrolls */
  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = [];

    SECTIONS.forEach((section, index) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCurrentIndex(index);
          }
        },
        { threshold: 0.2, rootMargin: "-20% 0px -20% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const current = String(currentIndex + 1).padStart(3, "0");
  const total = String(SECTIONS.length).padStart(3, "0");

  return (
    <div className={`${styles.indicator} ${hasScrolled ? styles.visible : ""}`} aria-hidden="true">
      <span className={styles.current}>{current}</span>
      <span className={styles.divider}>/</span>
      <span className={styles.total}>{total}</span>
      <span className={styles.label}>{SECTIONS[currentIndex]?.label}</span>
    </div>
  );
}
