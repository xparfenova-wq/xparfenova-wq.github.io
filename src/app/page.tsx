import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import {
  CommercialProjects,
  SocialProjects,
} from "@/components/sections/ProjectsOverview";
import { Media } from "@/components/sections/Media";
import { Community } from "@/components/sections/Community";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <CommercialProjects />
        <SocialProjects />
        <Media />
        <Community />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
