import Image from "next/image";
import { ExperienceSection } from "./components/ExperienceSection";
import { EducationSection } from "./components/EducationSection";
import { ContactForm } from "./components/ContactForm";
import FixedSocial from "./components/FixedSocial";
import HeroSection from "./components/HeroSection";
import PrefessionalSkills from "./components/PrefessionalSkills";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EducationSection />
      <PrefessionalSkills/>
      <Skills/>
      <ExperienceSection />
      <ContactForm />
      <FixedSocial />
    </>
  );
}
