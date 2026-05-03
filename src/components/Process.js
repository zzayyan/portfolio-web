"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./Process.module.css";
import TextReveal from "./TextReveal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ─── Process Stages Data ─── */
const STAGES = [
  {
    index: "01",
    label: "PROBLEM ARCHITECTURE",
    name: "DEFINE",
    description:
      "Decomposing the problem into data flows, knowledge boundaries, and agent responsibilities. Every system begins as a flowchart before any code is written.",
  },
  {
    index: "02",
    label: "SYSTEM DESIGN",
    name: "DESIGN",
    description:
      "Defining agent interfaces, retrieval schemas, prompt contracts, and state machine transitions using LangGraph before implementation begins.",
  },
  {
    index: "03",
    label: "ITERATIVE CONSTRUCTION",
    name: "BUILD",
    description:
      "Node-by-node implementation with constant evaluation loops. Each agent is tested in isolation before integration. Prompt engineering is treated as a first-class discipline.",
  },
  {
    index: "04",
    label: "BENCHMARK & ITERATE",
    name: "EVALUATE",
    description:
      "RAG evaluation using custom test suites, latency profiling, and LLM-as-judge scoring. Systems are production-ready only when they pass structured failure scenarios.",
  },
];

export default function Process() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray("[data-process-row]").forEach((el) => {
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
      id="process"
      ref={sectionRef}
      className={`${styles.section} section-dark`}
    >
      {/* Section Header */}
      <TextReveal as="h2" lines={["PROCESS"]} className={styles.headerTitle} />

      {/* Process Rows */}
      {STAGES.map((stage) => (
        <div key={stage.index} data-process-row className={styles.processRow}>
          {/* Left Cell — Index + Label */}
          <div className={styles.cellLeft}>
            <span className={styles.stageIndex}>[{stage.index}]</span>
            <span className={styles.stageLabel}>{stage.label}</span>
          </div>

          {/* Center Cell — Stage Name */}
          <div className={styles.cellCenter}>
            <h3 className={styles.stageName}>{stage.name}</h3>
          </div>

          {/* Right Cell — Description */}
          <div className={styles.cellRight}>
            <p className={styles.stageDescription}>{stage.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
