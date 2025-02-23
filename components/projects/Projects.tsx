"use client"

import { useTranslations } from "next-intl"
import { SeeMoreButton } from "../ui"
import { usePathname } from "next/navigation"
import Item from "./Item"
import Responsive from "@/utils/googleADS/Responsive"
import { GitBranch } from "lucide-react"
import Report from "../Report"

export const Projects = () => {
  const t = useTranslations("projects")
  const pathName = usePathname()

  return (
    <>
      <section id="projects" className="pt-20 from-background to-background/95">
        <div className={`container mx-auto px-8 md:px-10 lg:px-20 xl:px-32`}>
          <header className="text-center mb-12">
            <h1
              className={`font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent`}
            >
              {t("title")}
            </h1>
          </header>
          <div className="grid gap-8 md:grid-cols-2">
            <Item
              name="ONG Website"
              headerImg="/assets/images/ong-site.webp"
              description={t("descriptions.ongWebsite")}
              seeMore={{ url: "https://ong-site-two.vercel.app/", text: t("visitWebsite") }}
              techs={["nextjs", "i18n", "reactjs", "tailwindcss"]}
              headerLinks={{
                privateSource: true,
              }}
            />

            <Item
              name="Restaurant Website"
              headerImg="/assets/images/restaurant-website.webp"
              description={t("descriptions.restaurantWebsite")}
              seeMore={{ url: "https://w-food.abassdev.com/", text: t("checkItOut") }}
              techs={["nextjs", "firebase", "reactjs", "prisma", "postgreSQL", "tailwindcss"]}
              headerLinks={{
                privateSource: true,
              }}
            />
            <Item
              name="@open-react-hub"
              headerImg="/assets/images/open-react-hub.webp"
              description={t("descriptions.openReactHub")}
              seeMore={{ url: "https://github.com/abass-dev/open-react-hub", text: t("exploreHub") }}
              techs={["reactjs", "javascript", "nextjs", "vercel", "open-source"]}
              headerLinks={{
                github: {
                  url: "https://github.com/abass-dev/open-react-hub",
                  icon: <GitBranch />,
                },
              }}
            />
            <Item
              name="UR_NOT_M Project"
              headerImg="/assets/images/urnotm.webp"
              description={t("descriptions.urNotM")}
              seeMore={{ url: "https://urnotm.abassdev.com/", text: t("stepIntoMatrix") }}
              techs={["NextJs & Unkown Techs"]}
              headerLinks={{
                privateSource: true,
              }}
            />
            <Item
              name="Create images from your code snippet"
              headerImg="/assets/images/image-from-code.webp"
              description={t("descriptions.codeToImage")}
              seeMore={{ url: "https://apps.abassdev.com/image-from-code/", text: t("giveItATry") }}
              techs={["nextjs", "tailwindcss"]}
              headerLinks={{
                privateSource: true,
              }}
            />
            <Item
              name="Repo Inspector"
              headerImg="/assets/images/repo-inspector.webp"
              description={t("descriptions.repoInspector")}
              seeMore={{ url: "https://apps.abassdev.com/repo-inspector", text: t("giveItATry") }}
              techs={["nextjs", "tailwindcss"]}
              headerLinks={{
                github: {
                  url: "https://github.com/abass-dev/abassdev.com",
                  icon: <GitBranch />,
                },
              }}
            />
            <Item
              name="Invoice Generator"
              headerImg="/assets/images/invoice-enerator.webp"
              description={t("descriptions.invoiceGenerator")}
              seeMore={{ url: "https://success-facture.abassdev.com/", text: t("giveItATry") }}
              techs={["vite", "reactjs"]}
              headerLinks={{
                privateSource: true,
              }}
            />
            <Item
              name="NigaPHP framework"
              headerImg="/assets/images/project-nigaphp.webp"
              description={t("descriptions.nigaPHP")}
              seeMore={{
                url: "https://github.com/nigaphp",
                text: t("discoverFramework"),
              }}
              techs={["php", "javascript", "shell", "twig"]}
              headerLinks={{
                github: {
                  url: "https://github.com/nigaphp",
                  icon: <GitBranch />,
                },
              }}
            />

            <Item
              name="Dynacard"
              headerImg="/assets/images/javascript-code.webp"
              description={t("descriptions.dynacard")}
              seeMore={{
                url: "https://www.npmjs.com/package/dynacard",
                text: t("checkoutNPM"),
              }}
              techs={["javascript", "react-native"]}
              headerLinks={{
                github: {
                  url: "https://github.com/abass-dev/dynacard",
                  icon: <GitBranch />,
                },
              }}
            />
            <Item
              name="Python Interactive Console"
              headerImg="/assets/images/run-python.webp"
              description={t("descriptions.pythonConsole")}
              techs={["nextjs"]}
              seeMore={{ url: "https://apps.abassdev.com/run-python", text: t("giveItATry") }}
              headerLinks={{
                privateSource: true,
              }}
            />
            <Item
              name="Form builder"
              headerImg="/assets/images/php_code.webp"
              description={t("descriptions.formBuilder")}
              seeMore={{
                url: "https://packagist.org/packages/benosp/formbuilder",
                text: t("checkoutPackagist"),
              }}
              techs={["php", "javascript", "css", "bootstrap"]}
              headerLinks={{
                github: {
                  url: "https://github.com/abass-dev/BenOSP-FormBuilder",
                  icon: <GitBranch />,
                },
              }}
            />

            <Item
              name="Portfolio (personal website)"
              headerImg="/assets/images/project-portfolio.webp"
              description={t("descriptions.portfolio")}
              seeMore={{
                url: "https://github.com/abass-dev/abassdev.com/",
                text: t("checkoutSource"),
              }}
              techs={["next.js", "typescript", "tailwind", "nodejs", "php", "express", "firebase", "mysql"]}
              headerLinks={{
                github: {
                  url: "https://github.com/abass-dev/abassdev.com",
                  icon: <GitBranch />,
                },
              }}
            />

            <Item
              name="Fakaray"
              headerImg="/assets/images/fakaray.webp"
              description={t("descriptions.fakaray")}
              techs={["react", "sass", "firebase"]}
              headerLinks={{
                privateSource: true,
              }}
            />

            {pathName.startsWith("/projects") && (
              <>
                <Item
                  name="World Of Techs (Blog)"
                  headerImg="/assets/images/blogimg.webp"
                  description={t("descriptions.worldOfTechs")}
                  seeMore={{
                    url: "https://abassdev.com/blog",
                    text: t("visitBlog"),
                  }}
                  techs={["php", "wordpress"]}
                  headerLinks={{
                    privateSource: true,
                  }}
                />

                <Item
                  name="Mobile app portfolio"
                  headerImg="/assets/images/mobile-app-portfolio.webp"
                  description={t("descriptions.mobilePortfolio")}
                  techs={["React Native"]}
                  headerLinks={{
                    privateSource: true,
                  }}
                />

                <Item
                  name="Social contribution app"
                  headerImg="/assets/images/social_contribution_app.webp"
                  description={t("descriptions.socialContribution")}
                  techs={["React Native"]}
                  headerLinks={{
                    privateSource: true,
                  }}
                />
              </>
            )}
          </div>
          {!pathName.includes("/projects") && (
            <div className="flex pt-10 justify-start">
              <SeeMoreButton text={t("seeMore")} goTo="/projects" />
            </div>
          )}
          <Responsive />
        </div>
      </section>
      {pathName.includes("/projects") && <Report report="projects/page" />}
    </>
  )
}

