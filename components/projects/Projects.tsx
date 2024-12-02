"use client";

import { BsGithub } from "react-icons/bs";
import { SeeMoreButton } from "../ui";
import { usePathname } from "next/navigation";
import Item from "./Item";
import { Report } from "../";
import localFont from "next/font/local";
import Responsive from "@/utils/googleADS/Responsive";
import IconCloud from "../ui/icon-cloud";
const Orbitron = localFont({
  src: "../../fonts/Orbitron/static/Orbitron-Black.ttf",
});

 
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const Projects = () => {
  const pathName = usePathname();

  return (
    <>
      <section id="projects" className="pt-20 dark:bg-gray-900">
 
        <div className={`container mx-auto px-8 md:px-10 lg:px-20 xl:px-32`}>
          <h1
            className={`${Orbitron.className} text-center font-bold  dark:text-white text-4xl pb-10 my-4 text-blue-950`}
          >
            Notable Projects
          </h1>    
          <div className="relative flex size-full items-center justify-center overflow-hidden px-20 pb-20 pt-2">
        <IconCloud iconSlugs={slugs} />
       </div>
          <div className="grid gap-8 md:grid-cols-2">
          <Item
              name="Create images from your code snippet"
              headerImg="/assets/images/image-from-code.webp"
              description="A simple and intuitive web app that lets you transform your code snippets into beautifully styled images. Perfect for sharing on social media, documentation, or presentations, this tool makes your code visually appealing and easy to showcase."
              seeMore={{ url: "https://apps.abassdev.com/image-from-code/", text: "Give it a try..." }}
              techs={["nextjs", "tailwindcss"]}
              headerLinks={{
                privateSource: true,
              }}
            />
            <Item
              name="Repo Inspector"
              headerImg="/assets/images/repo-inspector.webp"
              description="Repo Inspector is an innovative project designed to empower users with in-depth insights into their GitHub or GitLab repositories. With Repo Inspector, you gain a powerful tool that goes beyond the surface level, allowing you to unlock a wealth of information about your codebase."
              seeMore={{ url: "https://apps.abassdev.com/repo-inspector", text: "Give it a try..." }}
              techs={["nextjs", "tailwindcss"]}
              headerLinks={{
                github: {
                  url: "https://github.com/abass-dev/abassdev.com",
                  icon: <BsGithub />,
                },
              }}
            />
            <Item
              name="Invoice Generator"
              headerImg="/assets/images/invoice-enerator.webp"
              description="A streamlined tool designed to make invoice creation quick and hassle-free. Customize and generate professional invoices effortlessly."
              seeMore={{ url: "https://success-facture.abassdev.com/", text: "Give it a try..." }}
              techs={["vite", "reactjs"]}
              headerLinks={{
                privateSource: true,
              }}
            />
            <Item
              name="NigaPHP framework"
              headerImg="/assets/images/project-nigaphp.webp"
              description="NigaPHP is a lightweight PHP web application framework designed to simplify and speed up the development process for PHP developers. It was initially created by Abass Dev and has since been maintained and contributed to by a community of developers. With its user-friendly interface and powerful features, NigaPHP has become a popular choice for building scalable and secure web applications."
              seeMore={{
                url: "https://github.com/nigaphp",
                before: "Let's discover",
                text: "NigaPHP Framework",
                after: "in 5 minutes.",
              }}
              techs={["php", "javascript", "shell", "twig"]}
              headerLinks={{
                github: {
                  url: "https://github.com/nigaphp",
                  icon: <BsGithub />,
                },
              }}
            />

            <Item
              name="Dynacard"
              headerImg="/assets/images/javascript-code.webp"
              description="Dynacard is a React Native library that enables developers to effortlessly design visually stunning cards for their applications. This open-source library provides a flexible and customizable platform for creating beautiful cards within your React Native project."
              seeMore={{
                url: "https://www.npmjs.com/package/dynacard",
                text: "Dynacard",
                before: "Checkout",
                after: "on NPM (Nodejs Package Manager)",
              }}
              techs={["javascript", "react-native"]}
              headerLinks={{
                github: {
                  url: "https://github.com/abass-dev/dynacard",
                  icon: <BsGithub />,
                },
              }}
            />
             <Item
              name="Python Interactive Console"
              headerImg="/assets/images/run-python.webp"
              description="An online Python console that allows you to run Python code directly in your web browser, offering an easy-to-use command-line interface (CLI) for quick testing and experimentation."
              techs={["nextjs"]}
              seeMore={{ url: "https://apps.abassdev.com/run-python", text: "Give it a try..." }}
              headerLinks={{
               privateSource: true,
              }}
            />
            <Item
              name="Form builder"
              headerImg="/assets/images/php_code.webp"
              description="Looking for a user-friendly solution for building HTML forms? Check out Form Builder, an open-source project created by Abass Dev. The project is coded with PHP and styled using Bootstrap CSS, making it simple to create custom forms with ease."
              seeMore={{
                url: "https://packagist.org/packages/benosp/formbuilder",
                text: "Form builder",
                before: "Checkout",
                after: "on packagist",
              }}
              techs={["php", "javascript", "css", "bootstrap"]}
              headerLinks={{
                github: {
                  url: "https://github.com/abass-dev/BenOSP-FormBuilder",
                  icon: <BsGithub />,
                },
              }}
            />

            <Item
              name="Portfolio (personal website)"
              headerImg="/assets/images/project-portfolio.webp"
              description="This portfolio was developed with NextJs (Typescript). By using NextJs, the developer can create reusable UI components that can be used across the entire application, making it easier to maintain and update. NextJs also provides a virtual DOM (Document Object Model) that allows for faster updates to the user interface compared to traditional web development techniques."
              seeMore={{
                url: "https://github.com/abass-dev/abassdev.com/",
                text: "code source",
                before: "Checkout the",
                after: "of this website.",
              }}
              techs={[
                "next.js",
                "typescript",
                "tailwind",
                "nodejs",
                "php",
                "express",
                "firebase",
                "mysql",
              ]}
              headerLinks={{
                github: {
                  url: "https://github.com/abass-dev/abassdev.com",
                  icon: <BsGithub />,
                },
              }}
            />

            <Item
              name="Fakaray"
              headerImg="/assets/images/fakaray.webp"
              description="Fakaray is a user-friendly chat application that enables seamless communication between friends and family. With its intuitive interface and robust features, Fakaray offers a chat experience that is comparable to that of other popular chat apps on the market."
              techs={["react", "sass", "firebase"]}
              headerLinks={{
                privateSource: true,
              }}
            />
           

          </div>
          {pathName === "/projects/" ? (
              <>
                <Item
                  name="World Of Techs (Blog)"
                  headerImg="/assets/images/blogimg.webp"
                  description="Where I passionately share my knowledge with the world during my free time. This website is using WordPress (CMS). WordPress allows us to streamline blog posting, saving us valuable time."
                  seeMore={{
                    url: "https://abassdev.com/blog",
                    text: "World Of Techs",
                    before: "Visit",
                    after: "now.",
                  }}
                  techs={["php", "wordpress"]}
                  headerLinks={{
                   privateSource: true
                  }}
                />

                <Item
                  name="Mobile app portfolio"
                  headerImg="/assets/images/mobile-app-portfolio.webp"
                  description="My personal portfolio using React Native (Mobile app)"
                  techs={["React Native"]}
                  headerLinks={{
                    privateSource: true,
                  }}
                />

                <Item
                  name="Social contribution app"
                  headerImg="/assets/images/social_contribution_app.webp"
                  description="No description for this project."
                  techs={["React Native"]}
                  headerLinks={{
                    privateSource: true,
                  }}
                />
              </>
            ) : (
              <div className="flex pt-10 justify-start">
                <SeeMoreButton text="See more projects..." goTo="/projects" />
              </div>
            )}
          <Responsive />
        </div>
      </section>
      {pathName === "/projects/" && <Report report="projects/page" />}
    </>
  );
};

export default Projects;
