import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";
import AboutPage from "@/components/AboutPage";

export const metadata = {
  title: "About — Brillianta Zayyan Muhammad",
  description:
    "Learn more about Brillianta Zayyan Muhammad — AI Engineer specializing in RAG architectures, multi-agent systems, and LLM infrastructure.",
};

export default function About() {
  return (
    <>
      <Navigation />
      <ScrollProgress />
      <ScrollToTop />
      <PageTransition>
        <main>
          <AboutPage />
        </main>
      </PageTransition>
    </>
  );
}
