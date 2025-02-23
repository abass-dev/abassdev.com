"use client"

import { useTranslations } from "next-intl"
import {
  FaAppStore,
  FaFigma,
  FaInternetExplorer,
  FaPaintBrush,
  FaReact,
} from "react-icons/fa"
import { GiPadlock } from "react-icons/gi"
import { BsDatabaseAdd, BsWordpress } from "react-icons/bs"
import Item from "./Item"
import { FcLinux, FcSmartphoneTablet } from "react-icons/fc"
import { SiAdobeillustrator, SiAdobephotoshop, SiAndroidstudio, SiTorbrowser } from "react-icons/si"

import { TbBrandReactNative, TbBrandVscode } from "react-icons/tb"
import Responsive from "@/utils/googleADS/Responsive"

/**
 * Renders the Skills component.
 *
 * @return {JSX.Element} The rendered Skills component.
 */
const Skills = (): JSX.Element => {
  const t = useTranslations("skills")

  return (
    <section className="pt-20 from-background to-background/95"
      id="Skills"
    >
      <div className={`container mx-auto px-8 md:px-10 lg:px-20 xl:px-32`}>
        <h1
          className={`font-orbitron mb-16 text-center text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent`}
        >
          {t("title")}
        </h1>
        <div className="grid gap-8  md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Item
              title={t("webDevelopment.title")}
              desc={t("webDevelopment.description")}
              icon={{
                source: <FaInternetExplorer size={60} />,
                color: "text-sky-600",
                bg: "bg-sky-200",
              }}
              toolIcons={[
                {
                  name: "Wordpress",
                  source: <BsWordpress className={"text-3xl"} />,
                  color: "text-sky-800",
                },
                {
                  name: "React",
                  source: <FaReact className={"text-3xl"} />,
                  color: "text-sky-700",
                },
                {
                  name: "VSCode",
                  source: <TbBrandVscode className={"text-3xl"} />,
                  color: "text-sky-800",
                },
              ]}
            />
          </div>
          <div>
            <Item
              title={t("seoAndSecurity.title")}
              desc={t("seoAndSecurity.description")}
              icon={{
                source: <GiPadlock size={60} />,
                color: "text-red-600",
                bg: "bg-red-200",
              }}
              toolIcons={[
                {
                  name: "Database",
                  source: <BsDatabaseAdd className={"text-3xl"} />,
                  color: "text-red-600",
                },
                {
                  name: "Linux",
                  source: <FcLinux className={"text-3xl"} />,
                  color: "text-sky-700",
                },
                {
                  name: "Tor Browser",
                  source: <SiTorbrowser className={"text-3xl"} />,
                  color: "text-pink-800",
                },
              ]}
            />
          </div>
          <div>
            <Item
              icon={{
                source: <FaPaintBrush size={60} />,
                color: "text-gray-600",
                bg: "bg-gray-200",
              }}
              title={t("webDesign.title")}
              desc={t("webDesign.description")}
              toolIcons={[
                {
                  name: "Adobe Illustrator",
                  source: <SiAdobeillustrator className={"text-3xl"} />,
                  color: "text-yellow-600",
                },
                {
                  name: "Figma",
                  source: <FaFigma className={"text-3xl"} />,
                  color: "text-orange-800",
                },
                {
                  name: "Photoshop",
                  source: <SiAdobephotoshop className={"text-3xl"} />,
                  color: "text-sky-400",
                },
              ]}
            />
          </div>
          <div>
            <Item
              icon={{
                source: <FcSmartphoneTablet size={60} />,
                color: "text-green-600",
                bg: "bg-green-200",
              }}
              title={t("mobileApp.title")}
              desc={t("mobileApp.description")}
              toolIcons={[
                {
                  name: "Android Studio",
                  source: <SiAndroidstudio className={"text-3xl"} />,
                  color: "text-sky-800",
                },
                {
                  name: "App Store",
                  source: <FaAppStore className={"text-3xl"} />,
                  color: "text-orange-700",
                },
                {
                  name: "React Native",
                  source: <TbBrandReactNative className={"text-3xl"} />,
                  color: "text-green-700",
                },
              ]}
            />
          </div>
        </div>
        <Responsive />
      </div>
    </section>
  )
}

export default Skills

