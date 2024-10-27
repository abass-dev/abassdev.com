import { FAQ, Friends, Profile, Projects, Report, Skills } from "@/components";
import BlogSection from "@/components/blog/BlogSection";      

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
