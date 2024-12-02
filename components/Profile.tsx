"use client"

import { BsGithub, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import Link from "next/link"
import { FaArrowAltCircleRight } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import  ShimmerButton  from "@/components/ui/shimmer-button"
import  ShineBorder  from "@/components/ui/shine-border"
import  TypingAnimation  from "@/components/ui/typing-animation"
import localFont from "next/font/local";

const Orbitron = localFont({
  src: "../fonts/Orbitron/static/Orbitron-Black.ttf",
});
const EduNSWACTFoundation = localFont({
  src: "../fonts/Edu_NSW_ACT_Foundation/static/EduNSWACTFoundation-Bold.ttf",
});

const Profile = () => {
  return (
    <div className="bg-gradient-to-tr from-background to-muted min-h-screen flex justify-center items-center p-4">
      <Card className="w-full max-w-6xl">
        <CardContent className="p-10 grid md:grid-cols-3 gap-10 md:items-center">
          {/* Profile Picture */}
          <ShineBorder
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            className="bg-transparent overflow-hidden relative rounded-lg flex justify-center"
          >
            <img
              src="/assets/images/profile.webp"
              width={300}
              height={300}
              alt="Picture of Abass Dev"
              className="rounded-full bg-transparent"
            />
          </ShineBorder>

          {/* Profile Description */}
          <div className="md:col-span-2 space-y-6">
          <TypingAnimation
           text="I am,"
            className={`${EduNSWACTFoundation.className} text-left text-5xl bg-gradient-to-r from-blue-400 to-red-600 bg-clip-text text-transparent`}
          />
            
          
          <h1
            className={`${Orbitron.className} text-3xl md:text-5xl my-4 text-blue-900 dark:text-blue-300`}
          >
            Abass Dev
          </h1>
            <p className="text-xl text-foreground leading-relaxed">
              A passionate web and mobile app developer with over 6 years of experience in programming and the internet.
              In my free time, I enjoy sharing my experiences through my{" "}
              <Link
                href="https://abassdev.com/blog"
                target="_blank"
                className="text-primary hover:underline"
              >
                blog
              </Link>{" "}
              and contributing to the{" "}
              <Link
                href="https://github.com/abass-dev"
                target="_blank"
                className="text-primary hover:underline"
              >
                open-source community
              </Link>
              . I am also the creator of the{" "}
              <Link
                href="https://github.com/nigaphp"
                target="_blank"
                className="text-primary hover:underline"
              >
                NigaPHP framework
              </Link>
              .
            </p>

            {/* CV Download */}
            <div className="flex justify-center md:justify-start">
              <ShimmerButton className="shadow-2xl">
                <a
                  href="/assets/pdf/abass-cv-fr.pdf"
                  download={true}
                  className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg"
                >
                  RESUME
                </a>
              </ShimmerButton>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-5 text-muted-foreground">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/abass-dev" target="_blank" aria-label="GitHub">
                  <BsGithub className="h-6 w-6" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/abass-dev-a45932311" target="_blank" aria-label="LinkedIn">
                  <BsLinkedin className="h-6 w-6" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com/abass_dev" target="_blank" aria-label="Twitter">
                  <BsTwitter className="h-6 w-6" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://m.facebook.com/abassthedev" target="_blank" aria-label="Facebook">
                  <BsFacebook className="h-6 w-6" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="/contact" aria-label="Email">
                  <MdEmail className="h-6 w-6" />
                </Link>
              </Button>
            </div>

            {/* More About Me Link */}
            <div className="text-center md:text-left">
              <Button variant="link" asChild>
                <Link href="/my-story" className="uppercase flex gap-2 items-center">
                  Read more about me <FaArrowAltCircleRight />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Profile

