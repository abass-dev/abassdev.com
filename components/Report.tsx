'use client';

import { useTranslations } from "next-intl";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeIcon, BugIcon, MailIcon, PencilIcon, GitForkIcon } from 'lucide-react';
import Link from "next/link";

interface ReportProps {
  report?: string;
  dir?: string;
  ext?: string;
}

interface LinkItemProps {
  href: string;
  text: string;
  icon: React.ReactNode;
}

const LinkItem = ({ href, text, icon }: LinkItemProps) => {
  return (
    <li>
      <Button asChild variant="ghost" className="w-full justify-start">
        <Link href={href} className="flex items-center gap-2">
          {icon}
          <span>{text}</span>
        </Link>
      </Button>
    </li>
  );
};

export default function Report({
  report = "page",
  dir = "app",
  ext = ".tsx",
}: ReportProps) {
  const t = useTranslations("report");
  const links = [
    {
      href: `https://github.com/abass-dev/abassdev.com/blob/dev/${dir}/${report}${ext}`,
      text: t("links.0.text"),
      icon: <CodeIcon className="h-4 w-4" />,
    },
    {
      href: "https://github.com/abass-dev/abassdev.com/issues/new?",
      text: t("links.1.text"),
      icon: <BugIcon className="h-4 w-4" />,
    },
    {
      href: `mailto:abass@abassdev.com?subject=Report issues https://github.com/abass-dev/abassdev.com/blob/dev/${dir}/${report}${ext}&body=Hi Abass Dev, I found some issues with this component... [${report}]`,
      text: t("links.2.text"),
      icon: <MailIcon className="h-4 w-4" />,
    },
    {
      href: `https://github.com/abass-dev/abassdev.com/edit/dev/${dir}/${report}${ext}`,
      text: t("links.3.text"),
      icon: <PencilIcon className="h-4 w-4" />,
    },
    {
      href: "https://github.com/abass-dev/abassdev.com/fork",
      text: t("links.4.text"),
      icon: <GitForkIcon className="h-4 w-4" />,
    },
  ];

  return (
    <div className="container mx-auto px-8 md:px-10 lg:px-20 pb-20 xl:px-32">
      <Card className="bg-background text-foreground">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-edu-nsw text-primary">
            {t("title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Disclaimer Section */}
          <div className="mb-6 p-4 bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 dark:border-yellow-600 text-yellow-700 dark:text-yellow-200">
            <p className="font-semibold">{t("disclaimer.title")}</p>
            <p>
              {t("disclaimer.messageBeforeEmail")}
              <a
                href="mailto:abass@abassdev.com"
                className="text-blue-500 dark:text-blue-400 underline"
              >
                abass@abassdev.com
              </a>
              {t("disclaimer.messageAfterEmail")}
            </p>
          </div>
          {/* Links Section */}
          <ul className="space-y-2">
            {links.map((link, index) => (
              <LinkItem key={index} {...link} />
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}