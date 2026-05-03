"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./About.module.css";
import TextReveal from "./TextReveal";

gsap.registerPlugin(useGSAP);

const MARQUEE_TEXT =
  "INTERESTS: Retrieval-Augmented Generation · Multi-Agent Systems · LLM Evaluation · Prompt Engineering · Chain-of-Thought Reasoning · ReAct Agents · DSPy · LangGraph · ";

export default function About() {
  const sectionRef = useRef(null);

  /* Entrance animation — no ScrollTrigger needed since this is the landing section */
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`${styles.section} section-light`}
    >
      <div className={styles.grid}>
        {/* Left Column — Photo + Metadata */}
        <div data-about-animate className={styles.leftCol}>
          {/* Photo Space */}
          <div className={styles.photoWrapper}>
            {/*
              Replace this placeholder with your photo:
              <Image src="/your-photo.jpg" alt="[Your Name]" fill className={styles.photoImage} />
            */}
            <span className={styles.photoPlaceholder}>[ PHOTO ]</span>
          </div>

          {/* Metadata */}
          <div className={styles.metaBlock}>
            <div className={styles.metaEntry}>
              <span className={styles.metaLabel}>DISCIPLINE</span>
              <span className={styles.metaValue}>
                AI Engineering / System Architecture
              </span>
            </div>
            <div className={styles.metaEntry}>
              <span className={styles.metaLabel}>BASE</span>
              <span className={styles.metaValue}>[City, Country]</span>
            </div>
            <div className={styles.metaEntry}>
              <span className={styles.metaLabel}>AVAILABLE FOR</span>
              <span className={styles.metaValue}>
                Consulting · Full-time · Research Collaborations
              </span>
            </div>
          </div>
        </div>

        {/* Right Column — Name + Bio */}
        <div data-about-animate className={styles.rightCol}>
          <TextReveal
            as="h1"
            lines={["[FIRST", "LAST", "NAME]"]}
            className={styles.nameTitle}
            triggerStart="top 95%"
          />
          <span className={styles.roleTitle}>AI ENGINEER</span>

          <div className={styles.dividerLine} />

          <div className={styles.statement}>
            <p>
              I build AI-powered systems that retrieve, reason, and synthesize
              information. My work focuses on information retrieval, large
              language model engineering, and multi-agent system design.
            </p>
            <p>
              I approach AI engineering as a precision discipline — every prompt
              is a specification, every agent boundary is a contract. The goal is
              always to hide complexity from the user while delivering clear,
              reliable outputs.
            </p>
            <p>
              I focus on building AI infrastructure rather than standalone
              features — systems that are maintainable, evaluable, and designed
              to scale.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className={styles.marqueeWrapper} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          <span className={styles.marqueeContent}>{MARQUEE_TEXT}</span>
          <span className={styles.marqueeContent}>{MARQUEE_TEXT}</span>
        </div>
      </div>
    </section>
  );
}
