"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Navigation.module.css";

const NAV_ITEMS = [
  { label: "ABOUT_", href: "#about" },
  { label: "EXPERIENCE_", href: "#experience" },
  { label: "PROJECTS_", href: "#projects" },
  { label: "STACK_", href: "#stack" },
  { label: "CONTACT_", href: "#contact" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [time, setTime] = useState("");
  const pathname = usePathname();
  const isHome = pathname === "/";

  /* ─── Live Clock ─── */
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  /* ─── IntersectionObserver for active section tracking (homepage only) ─── */
  useEffect(() => {
    if (!isHome) return;

    const sectionIds = ["about", "experience", "projects", "stack", "contact"];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.1, rootMargin: "-56px 0px 0px 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  /* ─── Lock body scroll when mobile menu open ─── */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    if (!isHome) return;
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
      {/* Logotype */}
      <Link href="/" className={styles.logotype}>
        [LAST_NAME, FIRST] / AI ENGINEER
      </Link>

      {/* Desktop — Nav Links + Clock */}
      <div className={styles.navRight}>
        <ul className={styles.navLinks}>
          {!isHome && (
            <li className={styles.navItem}>
              <Link href="/#projects" className={styles.navLink}>
                ← BACK
              </Link>
              <span className={styles.separator}>·</span>
            </li>
          )}
          {NAV_ITEMS.map((item, i) => (
            <li key={item.href} className={styles.navItem}>
              {(i > 0 || !isHome) && (
                <span className={styles.separator}>·</span>
              )}
              {isHome ? (
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={
                    activeSection === item.href.slice(1)
                      ? styles.navLinkActive
                      : styles.navLink
                  }
                >
                  {item.label}
                </a>
              ) : (
                <Link href={`/${item.href}`} className={styles.navLink}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Live Clock */}
        {time && (
          <span className={styles.clock} aria-label="Current time" suppressHydrationWarning>
            {time}
          </span>
        )}
      </div>

      {/* Hamburger (Mobile) */}
      <button
        className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
      >
        <span className={styles.hamburgerLine} />
        <span className={styles.hamburgerLine} />
        <span className={styles.hamburgerLine} />
      </button>

      {/* Mobile Overlay */}
      <div
        className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOverlayOpen : ""}`}
        aria-hidden={!mobileOpen}
      >
        {!isHome && (
          <Link
            href="/#projects"
            className={styles.mobileLink}
            onClick={() => setMobileOpen(false)}
          >
            ← BACK
          </Link>
        )}
        {NAV_ITEMS.map((item) =>
          isHome ? (
            <a
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.href}
              href={`/${item.href}`}
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          )
        )}
      </div>
    </nav>
  );
}
