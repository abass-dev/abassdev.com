"use client"
import React from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ShimmerButton from "@/components/ui/shimmer-button";
import { ArrowRight, FacebookIcon, GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from 'lucide-react';

// Social links data
const SOCIAL_LINKS = [
  {
    icon: GithubIcon,
    href: "https://github.com/abass-dev",
    label: "GitHub",
    hoverColor: "hover:bg-[#333]"
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/abass-dev-a45932311",
    label: "LinkedIn",
    hoverColor: "hover:bg-[#0077b5]"
  },
  {
    icon: TwitterIcon,
    href: "https://twitter.com/abass_dev",
    label: "Twitter",
    hoverColor: "hover:bg-[#1DA1F2]"
  },
  {
    icon: FacebookIcon,
    href: "https://m.facebook.com/abassthedev",
    label: "Facebook",
    hoverColor: "hover:bg-[#4267B2]"
  },
  {
    icon: MailIcon,
    href: "/contact",
    label: "Email",
    hoverColor: "hover:bg-primary"
  }
];

// Separate components for better organization
const BackgroundBlobs = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -inset-[10px] opacity-50">
      {[
        "top-1/4 left-1/4 bg-primary/20",
        "top-1/3 right-1/4 bg-violet-500/20 animation-delay-2000",
        "bottom-1/4 left-1/3 bg-blue-500/20 animation-delay-4000"
      ].map((className, index) => (
        <div
          key={index}
          className={`absolute w-96 h-96 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl animate-blob ${className}`}
        />
      ))}
    </div>
  </div>
);

const ProfileImage = () => (
  <div className="relative group mx-auto md:mx-0 w-fit">
    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-violet-500 to-blue-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500">
      <div className="absolute inset-0 animate-spin-slow" />
    </div>
    <div className="relative rounded-full overflow-hidden h-48 w-48 md:h-64 md:w-64">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-violet-500/10 group-hover:opacity-0 transition duration-500" />
      <img
        src="/assets/images/profile.webp"
        alt="Abass Dev"
        width={256}
        height={256}
        className="object-cover w-full h-full transform group-hover:scale-105 transition duration-500"
      />
    </div>
  </div>
);

const SocialLinks = () => (
  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
    {SOCIAL_LINKS.map(({ icon: Icon, href, label, hoverColor }) => (
      <Link
        key={label}
        href={href}
        target={href.startsWith('http') ? "_blank" : undefined}
        rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
        className={`group relative p-2 md:p-3 bg-background dark:bg-background/80 rounded-full text-foreground transition-all duration-300 ${hoverColor} hover:text-white`}
        aria-label={label}
      >
        <Icon className="h-5 w-5 md:h-6 md:w-6  transition-transform group-hover:scale-110 duration-300" />
      </Link>
    ))}
  </div>
);

const Profile = () => {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-background to-background/95 flex items-center justify-center p-4 overflow-hidden">
      <BackgroundBlobs />

      <div className="relative w-full max-w-6xl mx-auto">
        <article className="backdrop-blur-sm bg-background/50 dark:bg-background/20 rounded-2xl border border-border shadow-2xl">
          <div className="grid md:grid-cols-[1fr,1.5fr] gap-8 p-8 md:p-12">
            <div className="space-y-8">
              <ProfileImage />
              <SocialLinks />
            </div>

            <div className="space-y-8 text-center md:text-left">
              <header className="space-y-4">
                <div className="font-edu-nsw text-2xl md:text-3xl">
                  <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                    Hello World, I am
                  </span>
                </div>
                <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl">
                  <span className="bg-gradient-to-r from-primary via-violet-500 to-blue-500 bg-clip-text text-transparent">
                    Abass Dev
                  </span>
                </h1>
              </header>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I am a passionate web and mobile app developer with over 6 years of experience in programming and internet technologies.
                In my free time, I enjoy sharing my experiences through my <Link href="https://abassdev.com/blog" className="text-blue-950 dark:text-white underline underline-offset-1 hover:text-primary transition-colors">blog</Link> and contributing to the <Link href="https://abassdev.com/blog" className="text-blue-950 dark:text-white underline underline-offset-1 hover:text-primary transition-colors">open-source</Link> community.
                I am the creator of the <Link href="https://github.com/nigaphp" className="text-blue-950 dark:text-white underline underline-offset-1 hover:text-primary transition-colors">NigaPHP</Link> framework  and the maintainer of <Link href="https://www.npmjs.com/org/open-react-hub" className="text-blue-950 dark:text-white underline underline-offset-1 hover:text-primary transition-colors">@open-react-hub</Link>.
              </p>

              <div className="flex items-center gap-2 justify-center md:justify-start text-muted-foreground">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                Available for new projects
              </div>

              <div className="flex flex-wrap gap-6 justify-center items-center pt-4">
                <ShimmerButton className="min-w-[100px]">
                  <Link href="/assets/pdf/abass-cv-fr.pdf" download className="px-8 text-white">
                    Download Resume
                  </Link>
                </ShimmerButton>
                <Button
                  variant="outline"
                  asChild
                  className="group relative overflow-hidden min-w-[100px] bg-background/80 hover:bg-background dark:hover:text-primary"
                >
                  <Link href="/my-story" className="flex dark:text-white items-center justify-center gap-2">
                    More About Me
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
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