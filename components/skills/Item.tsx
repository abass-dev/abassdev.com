'use client'

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface IconProps {
  source: React.ReactNode
  color: string
  bg: string
}

interface ToolIconProps {
  source: React.ReactNode
  color: string
  name: string
}

interface ServiceCardProps {
  icon: IconProps
  title: string
  desc: string
  toolIcons?: ToolIconProps[]
}

const MainIcon = ({ icon }: { icon: IconProps }) => {
  return (
    <div className={cn("p-4 rounded-full inline-flex items-center justify-center", icon.bg, icon.color)}>
      {icon.source}
    </div>
  )
}

const ToolIcon = ({ toolIcon }: { toolIcon: ToolIconProps }) => {
  return (
    <div className={cn("rounded-full hover:scale-110 transition-transform border-2 p-2", toolIcon.color)}>
      {toolIcon.source}
    </div>
  )
}

export default function Item({ icon, title, desc, toolIcons }: ServiceCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-col items-center">
        <MainIcon icon={icon} />
        <CardTitle className="text-3xl mt-4 font-edu-nsw">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        {toolIcons && (
          <div className="flex justify-center gap-2 mb-4">
            <TooltipProvider>
              {toolIcons.map((item, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <ToolIcon toolIcon={item} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        )}
        <p className="text-muted-foreground">{desc}</p>
      </CardContent>
    </Card>
  )
}

