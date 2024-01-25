import BlogSection from "@/components/blog/BlogSection";
import {
  Profile,
  Skills,
  Report,
  Friends,
  Projects,
  FAQ,
  CookieConsent,
  Footer,
} from "../components";
import Navigation from "@/components/navigation/Navigation";
import ScrollUp from "@/components/ui/ScrollUp";

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
      <ScrollUp />
      <Footer />
    </div>
  );
}
