"use client";

import { BsGithub } from "react-icons/bs";

import { usePathname } from "next/navigation";
import Item from './Item'

const Projects = () => {
  const pathName = usePathname();

  return (
    <section
      id="projects"
      className={`${
        pathName === "/projects/" ? "xpt" : "py-8"
      } px-5 flex items-center justify-center`}
    >
      <div>
        <h1 className="text-3xl pb-8 text-center">Notable projects</h1>
        <div className="grid mx-auto gap-8 md:grid-cols-2">
         
         <Item 
          name='NigaPHP framework'
          description='NigaPHP is a lightweight PHP web application framework designed to simplify and speed up the development process for PHP developers. It was initially created by Abass Dev and has since been maintained and contributed to by a community of developers. With its user-friendly interface and powerful features, NigaPHP has become a popular choice for building scalable and secure web applications.'
          seeMore={{url: 'https://docs.nigaphp.abassdev.com', text: 'NigaPHP Framework' }}
          techs={['php', 'javascript', 'shell', 'twig']}
          headerLinks={{
            github: {
              url: 'nigaphp.abassdev.com',
              icon: <BsGithub />
            }
          }}
         />
         
        </div>
      </div>
    </section>
  );
};

export default Projects;
