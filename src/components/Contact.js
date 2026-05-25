"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Contact.module.css";

const CONTACT_LINKS = [
  { label: "EMAIL_", href: "mailto:brilliantazayyan@gmail.com" },
  { label: "GITHUB_", href: "https://github.com/zzayyan" },
  { label: "LINKEDIN_", href: "https://linkedin.com/in/brilliantazayyanm" },
  { label: "RESUME.PDF_", href: "/resume.pdf" },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`${styles.section} section-light`}
    >
      <div className={styles.ctaBlock}>
        {/* CTA Headline */}
        <motion.h2
          className={styles.ctaHeadline}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          GET IN
          <br />
          TOUCH.
        </motion.h2>

        {/* Divider */}
        <motion.div
          className={styles.ctaDivider}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        />

        {/* Contact Links */}
        <motion.nav
          className={styles.contactLinks}
          aria-label="Contact links"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.15,
          }}
        >
          {CONTACT_LINKS.map((link, i) => (
            <span key={link.label}>
              {i > 0 && <span className={styles.linkSeparator}>·</span>}
              <a
                href={link.href}
                className={styles.contactLink}
                target={link.href.startsWith("http") || link.href.endsWith(".pdf") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http") || link.href.endsWith(".pdf")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {link.label}
              </a>
            </span>
          ))}
        </motion.nav>
      </div>

      {/* Footer Strip */}
      <footer className={styles.footer}>
        <span>© {year} — BRILLIANTA ZAYYAN MUHAMMAD</span>
        <span>BUILT WITH NEXT.JS</span>
      </footer>
    </section>
  );
}
