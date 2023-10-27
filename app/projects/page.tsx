import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Projects from "../../components/projects/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abass Dev - Projects",
  description: "Projects | Abass Dev",
};

const Page = () => {
  return <Projects />;
};

export default Page;
