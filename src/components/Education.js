"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./Education.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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

  useGSAP(
    () => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 32,
        duration: 0.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="education"
      ref={sectionRef}
      className={`${styles.section} section-dark`}
    >
      <h2 className={styles.headerTitle}>EDUCATION & CERTIFICATIONS</h2>

      <div className={styles.grid}>
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
      </div>
    </section>
  );
}
