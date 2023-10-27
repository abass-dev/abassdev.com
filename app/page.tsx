import Image from "next/image";

import Services from "../components/services";
import Profile from "../components/profile";
import { Report, Friends, Projects } from "../components";

export default function Home() {
  return (
    <>
      <Profile />
      <Projects />
      <Services />
      <Friends />
    </>
  );
}
