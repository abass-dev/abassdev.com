import { Profile, Report, Friends, Projects, Services, FAQ } from "../components";

export default function Home() {
  return (
    <div className='dark:bg-gray-900 dark:text-gray-100'>
      <Profile />
      <Projects />
      <Services />
      <Friends />
      <FAQ />
      <Report />
    </div>
  );
}
