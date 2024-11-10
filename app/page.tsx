import BlogSection from "@/components/blog/BlogSection";      
import Profile from "@/components/Profile";
import Skills from "@/components/skills/Skills";
import FAQ from "@/components/faq";
import Friends from "@/components/friends/Friends";
import Projects from "@/components/projects/Projects";
import Report from "@/components/Report";

export default function page() {
  return (
    <div className=" dark:bg-gray-900 dark:text-black text-lg">
      <Profile />
      <Projects />
      <Skills />
      <BlogSection />
      <Friends />
      <FAQ />
      <Report />
    </div>
  );
}
