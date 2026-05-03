import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import SectionIndicator from "@/components/SectionIndicator";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <>
      <Navigation />
      <ScrollProgress />
      <SectionIndicator />
      <PageTransition>
        <main>
          <About />
          <Experience />
          <Projects />
          <TechStack />
          <Education />
          <Process />
          <Contact />
        </main>
      </PageTransition>
    </>
  );
}
