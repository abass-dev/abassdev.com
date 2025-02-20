import { useTranslations } from "next-intl";
import { Responsive } from "@/utils";

const PrivacyPolicy = () => {
  const t = useTranslations("PrivacyPolicy");

  return (
    <div className="dark:text-white dark:bg-gray-900">
      <div className="container mx-auto grid grid-cols-1 px-5 md:px-20 pt-20">
        <h1 className="dark:text-white text-3xl md:text-5xl pb-8 text-center">
          {t("heading")}
        </h1>
        <Responsive />
        <div className="shadow p-5 bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl mb-4">{t("content.intro.title")}</h2>
          <p>{t("content.intro.text")}</p>
        </div>

        <div className="shadow p-5 bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl mb-4">{t("content.informationCollection.title")}</h2>
          <p className="mb-3">
            {t("content.informationCollection.paragraph1")}
          </p>
          <p>
            {t("content.informationCollection.paragraph2")}
          </p>
        </div>

        <div className="shadow p-5 bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl mb-4">{t("content.googleServices.title")}</h2>
          <p className="mb-3">
            {t("content.googleServices.paragraph1")}
          </p>
          <p className="mb-3">
            {t("content.googleServices.paragraph2")}
          </p>
          <p>
            {t("content.googleServices.paragraph3")}
          </p>
        </div>

        <div className="shadow p-5 bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl mb-4">{t("content.security.title")}</h2>
          <p className="mb-3">
            {t("content.security.text")}
          </p>
        </div>

        <div className="shadow p-5 bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl mb-4">{t("content.contact.title")}</h2>
          <p className="mb-3">
            {t("content.contact.text")}{" "}
            <a className="text-blue-700" href="/contact">
              {t("content.contact.text")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;