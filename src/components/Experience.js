"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Experience.module.css";
import TextReveal from "./TextReveal";

/* ─── Work Experience Data ─── */
const EXPERIENCES = [
  {
    period: "OCT 2025 — APR 2026",
    company: "PT Link Apisindo Media",
    location: "Indonesia",
    role: "AI Engineer — Internship",
    description: [
      "Developed end-to-end AI systems: RAG-based chatbots, autonomous research agent, automated video processing pipelines",
      "Designed scalable backend using FastAPI, LangGraph, and Redis (real-time sync & async task management)",
      "Implemented LLM evaluation & monitoring with LangWatch and LangSmith (accuracy, latency, reliability)",
      "Leveraged AWS Bedrock, DeepSeek, and Gemini for legal, information, and creative sectors",
      "Configured OpenClaw setup & developed MCP to integrate ICCN RAG knowledge into OpenClaw (Telegram Bot)",
    ],
    tags: ["LangGraph", "FastAPI", "Amazon Bedrock", "Redis", "LangWatch"],
  },
  {
    period: "OCT 2025 — NOV 2025",
    company: "Research Project",
    location: "Malang, Indonesia",
    role: "Computer Vision Research Assistant",
    description: [
      "Managed and prepared instance segmentation datasets using Roboflow",
      "Conducted experiments with multiple YOLOv8-seg variants",
      "Contributed research insights on the impact of data augmentation combinations on model performance",
    ],
    tags: ["YOLOv8", "Roboflow", "Computer Vision", "Data Augmentation"],
  },
  {
    period: "JUL 2024 — AUG 2024",
    company: "Dishub Kota Malang",
    location: "Malang, Indonesia",
    role: "Web Developer — Internship",
    description: [
      "Developed a queue management website for live queue status monitoring",
      "Built an internal web app to help staff generate reports efficiently",
    ],
    tags: ["Web Development", "Queue System"],
  },
  {
    period: "FEB 2024 — JUN 2024",
    company: "Bangkit Academy",
    location: "Indonesia",
    role: "Machine Learning Cohort",
    description: [
      "Completed ML courses via Coursera and Dicoding (by Google, Tokopedia, Gojek, Traveloka)",
      "Collaborated in a multidisciplinary capstone team to develop a health-related mobile application",
    ],
    tags: ["Machine Learning", "TensorFlow", "Coursera", "Dicoding"],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`${styles.section} section-dark`}
    >
      <TextReveal as="h2" lines={["EXPERIENCE"]} className={styles.headerTitle} />

      {EXPERIENCES.map((exp, i) => (
        <motion.article
          key={i}
          className={styles.entry}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
            delay: i * 0.12,
          }}
        >
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
        </motion.article>
      ))}
    </section>
  );
}
