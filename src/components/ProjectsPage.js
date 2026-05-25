"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import styles from "./ProjectsPage.module.css";
import TextReveal from "./TextReveal";

const FILTERS = ["ALL", "PRODUCTION", "COMPLETED"];

export default function ProjectsPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-5% 0px" });
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects =
    activeFilter === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.status === activeFilter);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} section-light`}
    >
      {/* ── Header ── */}
      <div className={styles.header}>
        <div className={styles.headerTop}>
          <Link href="/" className={styles.backLink}>
            ← Back to Home
          </Link>
        </div>

        <TextReveal
          as="h1"
          lines={["ALL PROJECTS"]}
          className={styles.pageTitle}
        />

        {/* ── Filter Bar ── */}
        <div className={styles.filterBar}>
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`${styles.filterBtn} ${
                activeFilter === filter ? styles.filterBtnActive : ""
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* ── Projects Grid ── */}
      <div className={styles.grid}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
                delay: isInView ? i * 0.04 : 0,
              }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className={styles.card}
                aria-label={`View details for ${project.name}`}
              >
                {/* Card Header */}
                <div className={styles.cardHeader}>
                  <span className={styles.cardIndex}>[{project.index}]</span>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardYear}>{project.year}</span>
                    <span
                      className={`${styles.cardStatus} ${
                        project.status === "PRODUCTION"
                          ? styles.statusProduction
                          : styles.statusCompleted
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className={styles.cardBody}>
                  <span className={styles.cardType}>{project.type}</span>
                  <h2 className={styles.cardTitle}>{project.name}</h2>
                  <p className={styles.cardDescription}>
                    {project.shortDescription}
                  </p>
                </div>

                {/* Card Footer */}
                <div className={styles.cardFooter}>
                  <div className={styles.cardTags}>
                    {project.stack.split(" / ").slice(0, 4).map((tag) => (
                      <span key={tag} className={styles.cardTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className={styles.cardCta}>VIEW →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ── Empty State ── */}
      {filteredProjects.length === 0 && (
        <div className={styles.emptyState}>
          <span>No projects found for this filter.</span>
        </div>
      )}
    </section>
  );
}
