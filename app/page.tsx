import SuspenseLoading from "@/components/ui/SuspenseLoading";
import dynamic from "next/dynamic";

const Profile = dynamic(() => import('../components/Profile'), {ssr: false, loading: () => <SuspenseLoading />,})
const Report = dynamic(() => import('../components/Report'), {ssr: false})
const FAQ = dynamic(() => import('../components/faq'), {ssr: false})
const Projects = dynamic(() => import('../components/projects/Projects'), {ssr: false})
const Friends = dynamic(() => import('../components/friends/Friends'), {ssr: false})
const Skills = dynamic(() => import('../components/skills/Skills'), {ssr: false})

export default function page() {
  return (
    <div className=" dark:bg-gray-900 dark:text-black text-lg">
      <Profile />
      <Projects />
      <Skills />
      <Friends />
      <FAQ />
      <Report />
    </div>
  );
}
