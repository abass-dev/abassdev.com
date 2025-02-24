"use client"

import React from 'react';
import Link from "next/link";
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/ui/shimmer-button";
import { ArrowRight, FacebookIcon, GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from 'lucide-react';
import Image from 'next/image';

const SOCIAL_LINKS = [
  {
    icon: GithubIcon,
    href: "https://github.com/abass-dev",
    labelKey: "github",
    hoverColor: "hover:bg-[#333]"
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/abass-dev-a45932311",
    labelKey: "linkedin",
    hoverColor: "hover:bg-[#0077b5]"
  },
  {
    icon: TwitterIcon,
    href: "https://twitter.com/abass_dev",
    labelKey: "twitter",
    hoverColor: "hover:bg-[#1DA1F2]"
  },
  {
    icon: FacebookIcon,
    href: "https://m.facebook.com/abassthedev",
    labelKey: "facebook",
    hoverColor: "hover:bg-[#4267B2]"
  },
  {
    icon: MailIcon,
    href: "/contact",
    labelKey: "email",
    hoverColor: "hover:bg-primary"
  }
];

const BackgroundBlobs = () => (
  <div
    className="absolute inset-0 overflow-hidden"
    aria-hidden="true"
  >
    <div className="absolute -inset-[15px]">
      {[
        "top-1/4 left-1/4 bg-primary/20 w-[600px] h-[600px]",
        "top-1/3 right-1/4 bg-violet-500/20 w-[700px] h-[700px] animation-delay-2000",
        "bottom-1/4 left-1/3 bg-blue-500/20 w-[550px] h-[550px] animation-delay-4000",
        "bottom-1/3 right-1/3 bg-indigo-500/20 w-[650px] h-[650px] animation-delay-6000"
      ].map((className, index) => (
        <div
          key={index}
          className={`
            absolute 
            rounded-full 
            mix-blend-multiply 
            dark:mix-blend-soft-light 
            filter 
            blur-[100px]
            animate-blob-slow
            ${className}
          `}
        />
      ))}
    </div>
  </div>
);

const ProfileImage = () => (
  <div className="relative group mx-auto md:mx-0 w-fit">
    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-violet-500 to-blue-500 rounded-full opacity-75 group-hover:opacity-100 blur-md transition duration-700">
      <div className="absolute inset-0 animate-spin-slower" />
    </div>
    <div className="relative rounded-full overflow-hidden h-48 w-48 md:h-64 md:w-64">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-violet-500/20 group-hover:opacity-0 transition duration-700" />
      <Image
        src="/assets/images/profile.webp"
        alt="Abass Dev"
        width={256}
        height={256}
        blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEAD8D+JaQAA3AA/uVQAAA="
        placeholder="blur"
        className="object-cover w-full h-full transform group-hover:scale-110 transition duration-700"
      />
    </div>
  </div>
);

const SocialLinks = () => {
  const t = useTranslations('profile.social');

  return (
    <div className="flex flex-wrap gap-4 md:gap-5 justify-center md:justify-start">
      {SOCIAL_LINKS.map(({ icon: Icon, href, labelKey, hoverColor }) => (
        <Link
          key={labelKey}
          href={href}
          target={href.startsWith('http') ? "_blank" : undefined}
          rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
          className={`group relative p-2 md:p-4 bg-background/80 dark:bg-background/60 rounded-xl text-foreground 
            shadow-lg hover:shadow-xl transform hover:-translate-y-1 
            transition-all duration-300 ${hoverColor} hover:text-white`}
          aria-label={t(labelKey)}
        >
          <Icon className="h-4 w-4 md:h-6 md:w-6 transition-transform group-hover:scale-110 duration-300" />
        </Link>
      ))}
    </div>
  );
};

const Profile = () => {
  const t = useTranslations('profile');

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-background to-background/95 flex items-center justify-center p-4 md:p-6 overflow-hidden">
      <BackgroundBlobs />

      <div className="relative w-full max-w-7xl mx-auto">
        <article className="backdrop-blur-xl bg-background/40 dark:bg-background/10 rounded-3xl border border-border/50 shadow-2xl">
          <div className="grid md:grid-cols-[1fr,1.5fr] gap-10 p-8 md:p-14">
            <div className="space-y-10">
              <ProfileImage />
              <SocialLinks />
            </div>

            <div className="space-y-10 text-center md:text-left">
              <header className="space-y-6">
                <div className="font-edu-nsw text-3xl md:text-4xl">
                  <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent animate-gradient">
                    {t('header.greeting')}
                  </span>
                </div>
                <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl">
                  <span className="bg-gradient-to-r from-primary via-violet-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
                    {t('header.name')}
                  </span>
                </h1>
              </header>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {t.rich('bio.description', {
                  blog: (chunks) => (
                    <Link href="https://abassdev.com/blog" className="text-blue-950 dark:text-white underline underline-offset-2 hover:text-primary transition-colors">
                      {chunks}
                    </Link>
                  ),
                  openSource: (chunks) => (
                    <Link href="https://github.com/abass-dev" className="text-blue-950 dark:text-white underline underline-offset-2 hover:text-primary transition-colors">
                      {chunks}
                    </Link>
                  ),
                  nigaPHP: (chunks) => (
                    <Link href="https://github.com/nigaphp" className="text-blue-950 dark:text-white underline underline-offset-2 hover:text-primary transition-colors">
                      {chunks}
                    </Link>
                  ),
                  webUtilityX: (chunks) => (
                    <Link href="https://apps.abassdev.com" className="text-blue-950 dark:text-white underline underline-offset-2 hover:text-primary transition-colors">
                      {chunks}
                    </Link>
                  ),
                  openReactHub: (chunks) => (
                    <Link href="https://orh.vercel.app" className="text-blue-950 dark:text-white underline underline-offset-2 hover:text-primary transition-colors">
                      {chunks}
                    </Link>
                  )
                })}
              </p>

              <div className="flex items-center gap-3 justify-center md:justify-start text-muted-foreground">
                <span className="inline-block w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                {t('bio.availableStatus')}
              </div>

              <div className="flex flex-wrap gap-8 justify-center items-center pt-6">
                <ShimmerButton className="min-w-[150px]">
                  <Link href="/assets/pdf/abass-cv-fr.pdf" download className="px-8 text-white">
                    {t('actions.downloadResume')}
                  </Link>
                </ShimmerButton>
                <Button
                  variant="outline"
                  asChild
                  className="group relative overflow-hidden min-w-[150px] bg-background/80 hover:bg-background/95 
                    dark:hover:text-primary border-2 hover:border-primary/50 transition-all duration-300"
                >
                  <Link href="/my-story" className="flex dark:text-white items-center justify-center gap-3">
                    {t('actions.moreAboutMe')}
                    <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default Profile;