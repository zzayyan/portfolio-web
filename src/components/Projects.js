"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PROJECTS } from "@/data/projects";
import styles from "./Projects.module.css";
import TextReveal from "./TextReveal";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray("[data-project]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 32,
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
      id="projects"
      ref={sectionRef}
      className={`${styles.section} section-light`}
    >
      {/* Section Header */}
      <div className={styles.header}>
        <TextReveal as="h2" lines={["PROJECTS"]} className={styles.headerTitle} />
        <span className={styles.headerCounter}>
          [{String(PROJECTS.length).padStart(3, "0")} PROJECTS]
        </span>
      </div>

      {/* 2-Column Grid */}
      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <Link
            key={project.index}
            href={`/projects/${project.slug}`}
            data-project
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
        ))}
      </div>
    </section>
  );
}
