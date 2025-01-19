import BlogSection from "@/components/blog/BlogSection";
import Profile from "@/components/Profile";
import Skills from "@/components/skills/Skills";
import FAQ from "@/components/faq";
import Projects from "@/components/projects/Projects";
import Report from "@/components/Report";

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
