"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Navigation.module.css";

const NAV_ITEMS = [
  { label: "HOME_", href: "/", type: "link" },
  { label: "ABOUT_", href: "/about", type: "link" },
  { label: "EXPERIENCE_", href: "#experience", type: "scroll" },
  { label: "PROJECTS_", href: "#projects", type: "scroll" },
  { label: "EDU & CERT_", href: "#education", type: "scroll" },
  { label: "CONTACT_", href: "#contact", type: "scroll" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  /* ─── IntersectionObserver for active section tracking (homepage only) ─── */
  useEffect(() => {
    if (!isHome) return;

    const sectionIds = ["about", "experience", "projects", "education", "contact"];
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

  /* ─── Scroll to hash on page mount or route change ─── */
  useEffect(() => {
    if (isHome && typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash;
      const target = document.querySelector(hash);
      if (target) {
        const timer = setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 300);
        return () => clearTimeout(timer);
      }
    }
  }, [isHome, pathname]);

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

  const handleNavClick = (e, item) => {
    if (item.type === "scroll") {
      if (isHome) {
        e.preventDefault();
        setMobileOpen(false);
        const target = document.querySelector(item.href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
      // If not home, let it navigate to /{item.href} naturally
    } else {
      // type === "link" — just close mobile menu
      setMobileOpen(false);
    }
  };

  const getHref = (item) => {
    if (item.type === "scroll" && !isHome) {
      return `/${item.href}`;
    }
    return item.href;
  };

  const isActive = (item) => {
    if (item.type === "link") {
      return pathname === item.href;
    }
    return isHome && activeSection === item.href.slice(1);
  };

  return (
    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
      {/* Desktop — Centered Nav Links */}
      <ul className={styles.navLinks}>
        {NAV_ITEMS.map((item, i) => (
          <li key={item.label} className={styles.navItem}>
            {i > 0 && <span className={styles.separator}>·</span>}
            {item.type === "link" ? (
              <Link
                href={item.href}
                className={isActive(item) ? styles.navLinkActive : styles.navLink}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                href={getHref(item)}
                className={isActive(item) ? styles.navLinkActive : styles.navLink}
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>

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
        {NAV_ITEMS.map((item) =>
          item.type === "link" ? (
            <Link
              key={item.label}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={item.label}
              href={getHref(item)}
              className={styles.mobileLink}
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.label}
            </a>
          )
        )}
      </div>
    </nav>
  );
}
