"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import TextReveal from "./TextReveal";

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

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
};

export default function About() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className={`${styles.section} section-light`}>
      <div className={styles.grid}>
        {/* Left Column — Text Content */}
        <div className={styles.leftCol}>
          <motion.span {...fadeUp} className={styles.greeting}>
            Hello, it&apos;s me
          </motion.span>

          <TextReveal
            as="h1"
            lines={["Brillianta Zayyan Muhammad"]}
            className={styles.nameTitle}
          />

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className={styles.roleBlock}
          >
            <div className={styles.roleLine} />
            <span className={styles.roleTitle}>AI ENGINEER</span>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className={styles.statement}
          >
            <p>
              I build AI-powered systems that retrieve, reason, and synthesize
              information — focusing on RAG pipelines, multi-agent
              architectures, and LLM infrastructure engineered for reliability
              and scale.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.25 }}
            className={styles.ctaGroup}
          >
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
          </motion.div>

          {/* Tech Stack — Compact Pill Grid */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.3 }}
            className={styles.stackBlock}
          >
            <span className={styles.stackLabel}>STACK</span>
            <div className={styles.stackDivider} />
            <div className={styles.stackPills}>
              {STACK.map((tech) => (
                <span key={tech} className={styles.stackPill}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Column — Photo */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className={styles.rightCol}
        >
          <div className={styles.photoWrapper}>
            <span className={styles.photoPlaceholder}>[ PHOTO ]</span>
          </div>
        </motion.div>
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
