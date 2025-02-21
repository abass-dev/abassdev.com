import BlogSection from "@/components/blog/BlogSection";
import Profile from "@/components/Profile";
import Skills from "@/components/skills/Skills";
import FAQ from "@/components/faq";
import Report from "@/components/Report";
import { Projects } from "@/components/projects/Projects";

export default function page() {
  return (
    <>
      <Profile />
      <Projects />
      <Skills />
      <BlogSection />
      <FAQ />
      <Report />
    </>
  );
}
