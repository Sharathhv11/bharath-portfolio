import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SectionDivider } from "@/components/section-divider";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <SiteHeader />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider reverse />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider reverse />
      <Experience />
      <SectionDivider />
      <Contact />
    </main>
  );
}
