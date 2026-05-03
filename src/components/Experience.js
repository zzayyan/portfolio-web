"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./Experience.module.css";
import TextReveal from "./TextReveal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ─── Work Experience Data (placeholder — replace with real data) ─── */
const EXPERIENCES = [
  {
    period: "2024 — PRESENT",
    company: "[Company Name]",
    location: "[City, Country]",
    role: "AI Engineer",
    description: [
      "Designed and built RAG-based knowledge retrieval systems for regulatory document processing",
      "Developed multi-agent architectures using LangGraph for autonomous research tasks",
      "Integrated Amazon Bedrock (Nova Pro/Lite) and DeepSeek models into production pipelines",
      "Built and maintained FastAPI backend services handling concurrent AI workloads",
    ],
    tags: ["LangGraph", "Amazon Bedrock", "RAG", "FastAPI"],
  },
  {
    period: "2023 — 2024",
    company: "[Company Name]",
    location: "[City, Country]",
    role: "Software Engineer",
    description: [
      "Developed backend services and API integrations for data-intensive applications",
      "Implemented database architectures with PostgreSQL for high-throughput systems",
      "Collaborated with cross-functional teams to deliver production-ready features",
      "Introduced automated testing pipelines improving code reliability",
    ],
    tags: ["Python", "PostgreSQL", "Docker", "REST API"],
  },
  {
    period: "2022 — 2023",
    company: "[Company Name]",
    location: "[City, Country]",
    role: "Junior Developer",
    description: [
      "Built and maintained web applications using modern frameworks",
      "Participated in code reviews and contributed to technical documentation",
      "Assisted in migrating legacy systems to modern architectures",
    ],
    tags: ["Python", "JavaScript", "Git"],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray("[data-exp-entry]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`${styles.section} section-dark`}
    >
      <TextReveal as="h2" lines={["EXPERIENCE"]} className={styles.headerTitle} />

      {EXPERIENCES.map((exp, i) => (
        <article key={i} data-exp-entry className={styles.entry}>
          {/* Left — Period + Company */}
          <div className={styles.entryMeta}>
            <span className={styles.period}>{exp.period}</span>
            <span className={styles.company}>{exp.company}</span>
            <span className={styles.location}>{exp.location}</span>
          </div>

          {/* Right — Role + Description */}
          <div className={styles.entryContent}>
            <span className={styles.role}>{exp.role}</span>
            <ul className={styles.description}>
              {exp.description.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
            <div className={styles.tags}>
              {exp.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
