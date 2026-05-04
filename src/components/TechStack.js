"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./TechStack.module.css";

/* ─── Proficiency bar renderer ─── */
function ProficiencyBar({ level }) {
  const levels = { EXPERT: 12, ADVANCED: 10, PROFICIENT: 8 };
  const filled = levels[level] || 8;
  const empty = 15 - filled;

  return (
    <span className={styles.colProficiency}>
      <span className={styles.profBar}>
        <span className={styles.profBarFilled}>{"█".repeat(filled)}</span>
        <span className={styles.profBarEmpty}>{"░".repeat(empty)}</span>
      </span>
      <span className={styles.profLabel}>{level}</span>
    </span>
  );
}

/* ─── Stack Data ─── */
const STACK_DATA = [
  {
    category: "ORCHESTRATION",
    items: [
      { tool: "LangGraph", role: "Multi-agent state machine", level: "EXPERT" },
      { tool: "LangChain", role: "Chain composition, tooling", level: "EXPERT" },
    ],
  },
  {
    category: "LLM PROVIDERS",
    items: [
      { tool: "Amazon Bedrock", role: "Nova Pro / Nova Lite models", level: "EXPERT" },
      { tool: "DeepSeek", role: "Reasoning, code generation", level: "ADVANCED" },
      { tool: "OpenAI API", role: "GPT-4o integration", level: "ADVANCED" },
    ],
  },
  {
    category: "RETRIEVAL",
    items: [
      { tool: "pgvector", role: "Vector similarity search", level: "EXPERT" },
      { tool: "Tavily", role: "Real-time web search API", level: "ADVANCED" },
      { tool: "FAISS", role: "Embedding index prototype", level: "PROFICIENT" },
    ],
  },
  {
    category: "INFRASTRUCTURE",
    items: [
      { tool: "Python 3.11+", role: "Primary language", level: "EXPERT" },
      { tool: "FastAPI", role: "API layer, async endpoints", level: "ADVANCED" },
      { tool: "PostgreSQL", role: "Persistent storage, RAG data", level: "ADVANCED" },
      { tool: "Docker", role: "Containerization", level: "PROFICIENT" },
    ],
  },
];

export default function TechStack() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15% 0px" });

  const today = new Date().toISOString().split("T")[0];

  return (
    <section
      id="stack"
      ref={sectionRef}
      className={`${styles.section} section-dark`}
    >
      {/* Section Header */}
      <div className={styles.header}>
        <h2 className={styles.headerTitle}>TECH STACK</h2>
      </div>

      {/* 4.2 — Registry Table */}
      <motion.table
        className={styles.table}
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <thead>
          <tr>
            <th>CATEGORY</th>
            <th>TOOL / FRAMEWORK</th>
            <th>ROLE</th>
            <th className={styles.thProficiency}>PROFICIENCY</th>
          </tr>
        </thead>
        <tbody>
          {STACK_DATA.map((group) =>
            group.items.map((item, itemIdx) => (
              <tr key={`${group.category}-${item.tool}`}>
                {/* Category cell with rowSpan on first item */}
                {itemIdx === 0 && (
                  <td
                    className={styles.colCategory}
                    rowSpan={group.items.length}
                  >
                    {group.category}
                  </td>
                )}
                <td className={styles.colTool}>{item.tool}</td>
                <td className={styles.colRole}>{item.role}</td>
                <td className={styles.colProficiency}>
                  <ProficiencyBar level={item.level} />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </motion.table>

      {/* 4.3 — Footer Note */}
      <p className={styles.footerNote}>
        * PROFICIENCY ASSESSED: {today} — STACK CONTINUOUSLY UPDATED
      </p>
    </section>
  );
}
