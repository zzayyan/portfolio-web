import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";
import styles from "./page.module.css";

/* ─── Static Params for SSG ─── */
export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

/* ─── Dynamic Metadata ─── */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.name} — Portfolio`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.name} — Portfolio`,
      description: project.shortDescription,
      type: "article",
    },
  };
}

/* ─── Page Component ─── */
export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <ScrollProgress />
      <ScrollToTop />
      <PageTransition>
        <div className={`${styles.page} section-light`}>
          {/* Back Link */}
          <Link href="/projects" className={styles.backLink}>
            ← BACK TO PROJECTS
          </Link>

      {/* Header */}
      <header className={styles.header}>
        <span className={styles.projectIndex}>
          PROJECT [{project.index}]
        </span>
        <h1 className={styles.projectTitle}>{project.name}</h1>
        <span className={styles.projectType}>{project.type}</span>
      </header>

      {/* Metadata Grid */}
      <div className={styles.metaGrid}>
        <div className={styles.metaCell}>
          <span className={styles.metaLabel}>TYPE</span>
          <span className={styles.metaValue}>{project.type}</span>
        </div>
        <div className={styles.metaCell}>
          <span className={styles.metaLabel}>STATUS</span>
          <span className={styles.metaValue}>{project.status}</span>
        </div>
        <div className={styles.metaCell}>
          <span className={styles.metaLabel}>YEAR</span>
          <span className={styles.metaValue}>{project.year}</span>
        </div>
        <div className={styles.metaCell}>
          <span className={styles.metaLabel}>STACK</span>
          <span className={styles.metaValue}>{project.stack}</span>
        </div>
      </div>

      {/* Live Demo Link(s) */}
      {(project.demoUrl || project.demoLinks?.length > 0) && (
        <div className={styles.demoSection}>
          {project.demoLinks?.length > 0
            ? project.demoLinks.map((link) => (
                <div key={link.url} className={styles.demoItem}>
                  <a
                    href={link.url}
                    className={styles.demoButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={styles.demoPulse} />
                    <span>{link.label}</span>
                    <span>↗</span>
                  </a>
                  {link.note && (
                    <span className={styles.demoNote}>{link.note}</span>
                  )}
                </div>
              ))
            : (
                <a
                  href={project.demoUrl}
                  className={styles.demoButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.demoPulse} />
                  <span>LIVE DEMO</span>
                  <span>↗</span>
                </a>
              )}
        </div>
      )}

      {/* Content Grid — Description + Stack List */}
      <div className={styles.contentGrid}>
        <div className={styles.descriptionCol}>
          <span className={styles.sectionLabel}>OVERVIEW</span>
          {project.fullDescription.map((paragraph, i) => (
            <p key={i} className={styles.descriptionText}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className={styles.stackCol}>
          <span className={styles.sectionLabel}>TECHNICAL STACK</span>
          <ul className={styles.stackList}>
            {project.stackList.map((item) => (
              <li key={item} className={styles.stackItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
        </div>
      </PageTransition>
    </>
  );
}
