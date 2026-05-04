"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import styles from "./Contact.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CONTACT_LINKS = [
  { label: "EMAIL_", href: "mailto:your@email.com" },
  { label: "GITHUB_", href: "https://github.com" },
  { label: "LINKEDIN_", href: "https://linkedin.com" },
  { label: "RESUME.PDF_", href: "#" },
];

export default function Contact() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from("[data-contact-animate]", {
        opacity: 0,
        y: 32,
        duration: 0.5,
        ease: "expo.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: sectionRef }
  );

  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`${styles.section} section-light`}
    >
      <div className={styles.ctaBlock}>
        {/* CTA Headline */}
        <h2 data-contact-animate className={styles.ctaHeadline}>
          GET IN
          <br />
          TOUCH.
        </h2>

        {/* Divider */}
        <div data-contact-animate className={styles.ctaDivider} />

        {/* Contact Links */}
        <nav
          data-contact-animate
          className={styles.contactLinks}
          aria-label="Contact links"
        >
          {CONTACT_LINKS.map((link, i) => (
            <span key={link.label}>
              {i > 0 && <span className={styles.linkSeparator}>·</span>}
              <a
                href={link.href}
                className={styles.contactLink}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {link.label}
              </a>
            </span>
          ))}
        </nav>
      </div>

      {/* Footer Strip */}
      <footer className={styles.footer}>
        <span>© {year} — BRILLIANTA ZAYYAN MUHAMMAD</span>
        <span>BUILT WITH NEXT.JS</span>
      </footer>
    </section>
  );
}
