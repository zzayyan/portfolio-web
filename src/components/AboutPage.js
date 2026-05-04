"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import styles from "./AboutPage.module.css";
import TextReveal from "./TextReveal";

export default function AboutPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <section ref={sectionRef} className={`${styles.section} section-light`}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerGrid}>
          <div className={styles.headerLeft}>
            <Link href="/" className={styles.backLink}>
              ← Back to Home
            </Link>
            <TextReveal
              as="h1"
              lines={["About Me"]}
              className={styles.pageTitle}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.contentGrid}>
          {/* Bio Section */}
          <div className={styles.bioCol}>
            <motion.div
              className={styles.bioBlock}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.sectionLabel}>BACKGROUND</span>
              <div className={styles.sectionDivider} />
              <p className={styles.bodyText}>
                I build AI-powered systems that retrieve, reason, and synthesize
                information. My work focuses on information retrieval, large
                language model engineering, and multi-agent system design.
              </p>
              <p className={styles.bodyText}>
                I approach AI engineering as a precision discipline — every prompt
                is a specification, every agent boundary is a contract. The goal is
                always to hide complexity from the user while delivering clear,
                reliable outputs.
              </p>
              <p className={styles.bodyText}>
                I focus on building AI infrastructure rather than standalone
                features — systems that are maintainable, evaluable, and designed
                to scale.
              </p>
            </motion.div>

            <motion.div
              className={styles.bioBlock}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
            >
              <span className={styles.sectionLabel}>APPROACH</span>
              <div className={styles.sectionDivider} />
              <p className={styles.bodyText}>
                My engineering philosophy centers on building systems that are
                transparent, testable, and designed for iteration. I believe the
                best AI infrastructure makes complexity invisible to the end user
                while remaining fully observable to the developer.
              </p>
            </motion.div>
          </div>

          {/* Info Column */}
          <div className={styles.infoCol}>
            <motion.div
              className={styles.infoBlock}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.05,
              }}
            >
              <span className={styles.sectionLabel}>DISCIPLINE</span>
              <div className={styles.sectionDivider} />
              <p className={styles.infoValue}>
                AI Engineering / System Architecture
              </p>
            </motion.div>

            <motion.div
              className={styles.infoBlock}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
            >
              <span className={styles.sectionLabel}>AVAILABLE FOR</span>
              <div className={styles.sectionDivider} />
              <p className={styles.infoValue}>
                Consulting · Full-time · Research Collaborations
              </p>
            </motion.div>

            <motion.div
              className={styles.infoBlock}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.15,
              }}
            >
              <span className={styles.sectionLabel}>INTERESTS</span>
              <div className={styles.sectionDivider} />
              <div className={styles.interestPills}>
                {[
                  "RAG Systems",
                  "Multi-Agent",
                  "LLM Evaluation",
                  "Prompt Engineering",
                  "Chain-of-Thought",
                  "ReAct Agents",
                  "DSPy",
                  "LangGraph",
                ].map((item) => (
                  <span key={item} className={styles.pill}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className={styles.ctaBlock}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
            >
              <a href="/#contact" className={styles.ctaButton}>
                <span>↗</span> Let&apos;s Connect
              </a>
              <a
                href="/resume.pdf"
                className={styles.ctaButtonOutline}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>↓</span> Resume / CV
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
