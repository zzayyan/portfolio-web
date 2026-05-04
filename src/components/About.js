"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./About.module.css";
import TextReveal from "./TextReveal";

gsap.registerPlugin(useGSAP);

/* ─── Tech Stack Pills ─── */
const STACK = [
  "Python",
  "JavaScript",
  "TypeScript",
  "LangChain",
  "LangGraph",
  "FastAPI",
  "Next.js",
  "React",
  "Amazon Bedrock",
  "OpenAI API",
  "PostgreSQL",
  "pgvector",
  "Docker",
  "Git",
  "Linux",
];

const MARQUEE_TEXT =
  "Retrieval-Augmented Generation · Multi-Agent Systems · LLM Evaluation · Prompt Engineering · Chain-of-Thought Reasoning · ReAct Agents · DSPy · LangGraph · ";

export default function About() {
  const sectionRef = useRef(null);

  /* Entrance animation */
  useGSAP(
    () => {
      gsap.from("[data-about-animate]", {
        opacity: 0,
        y: 24,
        duration: 0.4,
        ease: "expo.out",
        stagger: 0.08,
      });
    },
    { scope: sectionRef }
  );

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`${styles.section} section-light`}
    >
      <div className={styles.grid}>
        {/* Left Column — Text Content */}
        <div className={styles.leftCol}>
          <span data-about-animate className={styles.greeting}>
            Hello, it&apos;s me
          </span>

          <TextReveal
            as="h1"
            lines={["Brillianta Zayyan Muhammad"]}
            className={styles.nameTitle}
            triggerStart="top 95%"
          />

          <div data-about-animate className={styles.roleBlock}>
            <div className={styles.roleLine} />
            <span className={styles.roleTitle}>AI ENGINEER</span>
          </div>

          <div data-about-animate className={styles.statement}>
            <p>
              I build AI-powered systems that retrieve, reason, and synthesize
              information — focusing on RAG pipelines, multi-agent
              architectures, and LLM infrastructure engineered for reliability
              and scale.
            </p>
          </div>

          {/* CTA Buttons */}
          <div data-about-animate className={styles.ctaGroup}>
            <a
              href="#contact"
              className={styles.ctaPrimary}
              onClick={(e) => handleScrollTo(e, "#contact")}
            >
              <span className={styles.ctaIcon}>↗</span>
              Let&apos;s Connect
            </a>
            <Link href="/about" className={styles.ctaSecondary}>
              Know me more
              <span className={styles.ctaIcon}>→</span>
            </Link>
          </div>

          {/* Tech Stack — Compact Pill Grid */}
          <div data-about-animate className={styles.stackBlock}>
            <span className={styles.stackLabel}>STACK</span>
            <div className={styles.stackDivider} />
            <div className={styles.stackPills}>
              {STACK.map((tech) => (
                <span key={tech} className={styles.stackPill}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column — Photo */}
        <div data-about-animate className={styles.rightCol}>
          <div className={styles.photoWrapper}>
            {/*
              Replace this placeholder with your photo:
              <Image src="/your-photo.jpg" alt="Brillianta Zayyan Muhammad" fill className={styles.photoImage} />
            */}
            <span className={styles.photoPlaceholder}>[ PHOTO ]</span>
          </div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className={styles.marqueeSection}>
        <span className={styles.marqueeLabel}>INTERESTS</span>
        <div className={styles.marqueeWrapper} aria-hidden="true">
          <div className={styles.marqueeTrack}>
            <span className={styles.marqueeContent}>{MARQUEE_TEXT}</span>
            <span className={styles.marqueeContent}>{MARQUEE_TEXT}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
