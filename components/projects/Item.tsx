'use client'

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon, LockClosedIcon } from "@radix-ui/react-icons"
import Link from "next/link"

interface HeaderLink {
  url?: string
  icon?: React.ReactNode
  privateSource?: boolean
}

interface SeeMore {
  before?: string
  after?: string
  url?: string
  text?: string
}

interface ItemProps {
  name: string
  description: string
  headerImg: string
  seeMore?: SeeMore
  techs: string[]
  headerLinks?: {
    github?: HeaderLink
    privateSource?: boolean
  }
}

const PrivateSourceButton = () => (
  <Button variant="outline" size="sm" asChild>
    <Link href="https://github.com/abass-dev" className="flex items-center gap-2">
      <LockClosedIcon className="h-4 w-4" />
      Private source
    </Link>
  </Button>
)

export default function Item({
  name,
  headerImg,
  description,
  seeMore,
  techs,
  headerLinks,
}: ItemProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <img
            className="object-cover transition-transform hover:scale-105"
            src={headerImg}
            alt={name}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        {headerLinks && (
          <div className="flex gap-2 mb-4">
            {headerLinks.github ? (
              <Button variant="outline" size="sm" asChild>
                <Link href={headerLinks.github.url || "#"} className="flex items-center gap-2">
                  <GitHubLogoIcon className="h-4 w-4" />
                  Code source
                </Link>
              </Button>
            ) : (
              <PrivateSourceButton />
            )}
          </div>
        )}
        <p className="text-muted-foreground mb-4">{description}</p>
        {seeMore && (
          <p>
            {seeMore.before}{" "}
            <Link href={seeMore.url || "#"} className="text-primary hover:underline">
              {seeMore.text}
            </Link>{" "}
            {seeMore.after}
          </p>
        )}
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 p-6 pt-0">
        {techs.map((tech, index) => (
          <Badge key={index} variant="secondary">
            {tech}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}

