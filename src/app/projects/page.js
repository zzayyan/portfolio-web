import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";
import ProjectsPage from "@/components/ProjectsPage";

export const metadata = {
  title: "Projects — Brillianta Zayyan Muhammad",
  description:
    "A full catalog of AI engineering projects by Brillianta Zayyan Muhammad — covering RAG systems, multi-agent architectures, computer vision, and more.",
};

export default function Projects() {
  return (
    <>
      <Navigation />
      <ScrollProgress />
      <ScrollToTop />
      <PageTransition>
        <main>
          <ProjectsPage />
        </main>
      </PageTransition>
    </>
  );
}
