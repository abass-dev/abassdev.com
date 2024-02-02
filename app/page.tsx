import BlogSection from "@/components/blog/BlogSection";
import {
  Profile,
  Skills,
  Report,
  Friends,
  Projects,
  FAQ,
  Footer,
} from "../components";
import Navigation from "@/components/navigation/Navigation";

export default function page() {
  return (
    <div className=" dark:bg-gray-900 dark:text-black text-lg">
      <Navigation />
      <Profile />
      <Projects />
      <Skills />
      <BlogSection />
      <Friends />
      <FAQ />
      <Report />
      <Footer />
    </div>
  );
}
