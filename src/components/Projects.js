"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { PROJECTS } from "@/data/projects";
import styles from "./Projects.module.css";
import TextReveal from "./TextReveal";

const FEATURED = PROJECTS.slice(0, 4);

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10% 0px" });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`${styles.section} section-light`}
    >
      {/* Section Header */}
      <div className={styles.header}>
        <TextReveal as="h2" lines={["PROJECTS"]} className={styles.headerTitle} />
      </div>

      {/* 2-Column Grid — Featured 4 only */}
      <div className={styles.grid}>
        {FEATURED.map((project, i) => (
          <motion.div
            key={project.index}
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.08,
            }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className={styles.card}
              aria-label={`View details for ${project.name}`}
            >
              {/* Card Header — Index + Year */}
              <div className={styles.cardHeader}>
                <span className={styles.cardIndex}>[{project.index}]</span>
                <span className={styles.cardYear}>{project.year}</span>
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.name}</h3>
                <p className={styles.cardDescription}>{project.shortDescription}</p>
              </div>

              {/* Card Footer — Stack + CTA */}
              <div className={styles.cardFooter}>
                <div className={styles.cardTags}>
                  {project.stack.split(" / ").slice(0, 4).map((tag) => (
                    <span key={tag} className={styles.cardTag}>{tag}</span>
                  ))}
                </div>
                <span className={styles.cardCta}>
                  VIEW PROJECT
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* See All Projects — Link to /projects page */}
      <div className={styles.seeMoreContainer}>
        <Link href="/projects" className={styles.seeMoreButton}>
          <span>SEE ALL PROJECTS</span>
          <span className={styles.buttonIcon}>→</span>
        </Link>
      </div>
    </section>
  );
}
