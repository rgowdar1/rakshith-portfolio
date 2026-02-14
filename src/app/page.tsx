import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import EducationSection from "../components/sections/EducationSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import SkillsSection from "../components/sections/SkillsSection";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <div>
      <Reveal delayMs={0}>
        <AboutSection />
      </Reveal>
      <Reveal delayMs={60}>
        <EducationSection />
      </Reveal>
      <Reveal delayMs={120}>
        <ExperienceSection />
      </Reveal>
      <Reveal delayMs={180}>
        <SkillsSection />
      </Reveal>
      <Reveal delayMs={240}>
        <ProjectsSection />
      </Reveal>
      <Reveal delayMs={300}>
        <ContactSection />
      </Reveal>
    </div>
  );
}
