import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/data/projects";
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
    <div className={`${styles.page} section-light`}>
      {/* Back Link */}
      <Link href="/#projects" className={styles.backLink}>
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

      {/* Architecture Diagram */}
      <div className={styles.diagramSection}>
        <span className={styles.diagramLabel}>ARCHITECTURE DIAGRAM</span>
        <pre
          className={styles.diagram}
          aria-label={`Architecture diagram for ${project.name}`}
        >
          {project.diagram}
        </pre>
      </div>

      {/* Architecture Pattern */}
      <div className={styles.patternSection}>
        <span className={styles.sectionLabel}>ARCHITECTURE PATTERN</span>
        <p className={styles.patternText}>{project.pattern}</p>
      </div>
    </div>
  );
}
