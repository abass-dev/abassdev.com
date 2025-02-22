import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, GithubIcon, LockKeyhole } from 'lucide-react';
import Image from 'next/image';

interface HeaderLink {
  url?: string;
  icon?: React.ReactNode;
  privateSource?: boolean;
}

interface SeeMore {
  before?: string;
  after?: string;
  url?: string;
  text?: string;
}

interface ItemProps {
  name: string;
  description: string;
  headerImg: string;
  seeMore?: SeeMore;
  techs: string[];
  headerLinks?: {
    github?: HeaderLink;
    privateSource?: boolean;
  };
}

const PrivateSourceButton = () => (
  <Button variant="outline" size="sm" asChild>
    <Link
      href="https://github.com/abass-dev"
      className="flex items-center gap-2 group"
      aria-label="Private source code"
    >
      <LockKeyhole className="h-4 w-4 transition-transform group-hover:scale-110" />
      <span className="hidden md:inline">Private source</span>
    </Link>
  </Button>
);

const HeaderLinks = ({ headerLinks }: { headerLinks?: ItemProps['headerLinks'] }) => {
  if (!headerLinks) return null;

  return (
    <div className="flex gap-2">
      {headerLinks.github ? (
        <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
          <Link
            href={headerLinks.github.url || "#"}
            className="flex items-center gap-2 group"
            aria-label="View source code on GitHub"
          >
            <GithubIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span className="hidden md:inline">Source</span>
          </Link>
        </Button>
      ) : (
        <PrivateSourceButton />
      )}
    </div>
  );
};

export default function Item({ name, headerImg, description, seeMore, techs, headerLinks }: ItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/5">
      <CardHeader className="p-0">
        <div
          className="relative aspect-video overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={headerImg}
            alt={name}
            width={800} // Set appropriate width
            height={450} // Set appropriate height
            className={`object-cover transition-all duration-500 ${isHovered ? 'scale-105' : ''}`}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
            priority // Preload above-the-fold images
          />
          {headerLinks?.github && (
            <div
              className={`absolute inset-0 flex items-center justify-center z-20 bg-background/10 backdrop-blur-sm transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            >
              <Button
                variant="secondary"
                size="sm"
                asChild
                className="transform -translate-y-2 transition-all duration-300 hover:scale-105"
              >
                <Link
                  href={headerLinks.github.url || "#"}
                  className="flex items-center gap-2"
                  aria-label="View source code on GitHub"
                >
                  <GithubIcon className="h-4 w-4" />
                  View Source
                </Link>
              </Button>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
            {name}
          </h2>
          <HeaderLinks headerLinks={headerLinks} />
        </div>
        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>
        {seeMore && (
          <p className="text-sm">
            {seeMore.before}{" "}
            <Link
              href={seeMore.url || "#"}
              className="text-primary hover:text-primary/80 inline-flex items-center gap-1 group"
              aria-label={`Learn more about ${name}`}
            >
              {seeMore.text}
              <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>{" "}
            {seeMore.after}
          </p>
        )}
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2 p-6 pt-0">
        {techs.map((tech, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-muted/50 hover:bg-primary/10 transition-colors duration-300 cursor-default"
          >
            {tech}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}