"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Education.module.css";

/* ─── Education Data (placeholder — replace with real data) ─── */
const EDUCATION = [
  {
    period: "2020 — 2024",
    title: "[Degree Title]",
    institution: "[University Name]",
    detail: "[Faculty / Department]",
  },
  {
    period: "2017 — 2020",
    title: "[Previous Degree]",
    institution: "[Institution Name]",
    detail: "[Relevant field of study]",
  },
];

/* ─── Certifications Data (placeholder — replace with real data) ─── */
const CERTIFICATIONS = [
  {
    period: "2024",
    title: "[Certification Name]",
    issuer: "[Issuing Organization]",
    credentialId: "[CREDENTIAL-ID]",
  },
  {
    period: "2024",
    title: "[Certification Name]",
    issuer: "[Issuing Organization]",
    credentialId: "[CREDENTIAL-ID]",
  },
  {
    period: "2023",
    title: "[Certification Name]",
    issuer: "[Issuing Organization]",
    credentialId: "[CREDENTIAL-ID]",
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
              <span className={styles.certBadge}>{cert.credentialId}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
