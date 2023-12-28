import BlogSection from "@/components/blog/BlogSection";
import { Profile, Skills, Report, Friends, Projects, FAQ } from "../components";

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
