"use client";

import { useTranslations } from "next-intl";
import { Responsive } from "@/utils";

const Copyright = () => {
  const t = useTranslations("Copyright");

  return (
    <div className="dark:text-gray-100 dark:bg-gray-900">
      <div className={`container mx-auto px-10 md:px-20 pt-32 lg:pt-10 pb-10`}>
        <h1 className="dark:text-white text-3xl md:text-5xl pb-8 text-center">
          {t("heading")}
        </h1>
        <Responsive />
        <div className="bg-gray-50 p-5 dark:bg-gray-800">
          <h2 className="text-xl">{t("rightsReserved")}</h2>
          <p>{t("content.paragraph1")}</p>
          <p>{t("content.paragraph2")}</p>
          <p>{t("content.paragraph3")}</p>
          <p>{t("content.paragraph4")}</p>
          <p>{t("content.paragraph5")}</p>
          <p>{t("content.paragraph6")}</p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;