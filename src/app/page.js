import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import SectionIndicator from "@/components/SectionIndicator";
import PageTransition from "@/components/PageTransition";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navigation />
      <ScrollProgress />
      <SectionIndicator />
      <ScrollToTop />
      <PageTransition>
        <main>
          <About />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
      </PageTransition>
    </>
  );
}
