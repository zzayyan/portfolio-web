"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Education.module.css";

/* ─── Education Data ─── */
const EDUCATION = [
  {
    period: "2021 — 2025",
    title: "Bachelor of Engineering (S.T.)",
    institution: "State University of Malang (Universitas Negeri Malang)",
    detail: "Informatics Engineering / Computer Science — GPA: 3.93 / 4.0",
  },
];

/* ─── Certifications Data ─── */
const CERTIFICATIONS = [
  {
    period: "2024",
    title: "Bangkit Academy 2024",
    issuer: "Google, Tokopedia, Gojek, Traveloka",
  },
  {
    period: "2024",
    title: "TensorFlow Developer Specialization",
    issuer: "DeepLearning.AI",
  },
  {
    period: "2024",
    title: "TensorFlow: Advanced Techniques",
    issuer: "DeepLearning.AI",
  },
  {
    period: "2024",
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
  },
  {
    period: "2024",
    title: "Generative AI for Everyone",
    issuer: "DeepLearning.AI",
  },
  {
    period: "2026",
    title: "ICCN Contribution Appreciation Certificate",
    issuer: "ICCN",
  },
];

export default function Education() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15% 0px" });

  return (
    <section
      id="education"
      ref={sectionRef}
      className={`${styles.section} section-dark`}
    >
      <motion.h2
        className={styles.headerTitle}
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        EDUCATION & CERTIFICATIONS
      </motion.h2>

      <motion.div
        className={styles.grid}
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.1,
        }}
      >
        {/* Education Column */}
        <div className={styles.eduCol}>
          <h3 className={styles.subHeader}>EDUCATION</h3>
          {EDUCATION.map((edu, i) => (
            <div key={i} className={styles.entry}>
              <span className={styles.entryPeriod}>{edu.period}</span>
              <span className={styles.entryTitle}>{edu.title}</span>
              <span className={styles.entryOrg}>{edu.institution}</span>
              {edu.detail && (
                <span className={styles.entryDetail}>{edu.detail}</span>
              )}
            </div>
          ))}
        </div>

        {/* Certifications Column */}
        <div className={styles.certCol}>
          <h3 className={styles.subHeader}>CERTIFICATIONS</h3>
          {CERTIFICATIONS.map((cert, i) => (
            <div key={i} className={styles.entry}>
              <span className={styles.entryPeriod}>{cert.period}</span>
              <span className={styles.entryTitle}>{cert.title}</span>
              <span className={styles.entryOrg}>{cert.issuer}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
