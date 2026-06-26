"use client";

import Link from "next/link";
import Image from "next/image";
import profileImg from "../../public/profile.jpg";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import TextReveal from "./TextReveal";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
};

export default function About() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className={`${styles.section} section-light`}>
      <div className={styles.grid}>
        {/* Circle Profile Photo */}
        <motion.div {...fadeUp} className={styles.profileCircle}>
          <Image
            src={profileImg}
            alt="Brillianta Zayyan Muhammad"
            fill
            placeholder="blur"
            className={styles.profileImage}
            sizes="(max-width: 767px) 150px, (max-width: 1279px) 190px, 220px"
            priority
          />
        </motion.div>

        {/* Text Content */}
        <div className={styles.content}>
          <motion.span {...fadeUp} className={styles.greeting}>
            Hello, it&apos;s me
          </motion.span>

          <TextReveal
            as="h1"
            lines={["Brillianta Zayyan Muhammad"]}
            className={styles.nameTitle}
          />

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.15 }}
            className={styles.roleBlock}
          >
            <div className={styles.roleLine} />
            <span className={styles.roleTitle}>AI ENGINEER</span>
            <div className={styles.roleLine} />
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            className={styles.statement}
          >
            <p>
              I build AI-powered systems that retrieve, reason, and synthesize
              information &mdash; focusing on RAG pipelines, multi-agent
              architectures, and LLM infrastructure engineered for reliability
              and scale.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.25 }}
            className={styles.ctaGroup}
          >
            <a
              href="#contact"
              className={styles.ctaPrimary}
              onClick={(e) => handleScrollTo(e, "#contact")}
            >
              <span className={styles.ctaIcon}>↗</span>
              Let&apos;s Connect
            </a>
            <Link href="/about" className={styles.ctaSecondary}>
              Know me more
              <span className={styles.ctaIcon}>→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
