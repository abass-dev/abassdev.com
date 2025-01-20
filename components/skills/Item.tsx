'use client';

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface IconProps {
  source: React.ReactNode;
  color: string;
  bg: string;
}

interface ToolIconProps {
  source: React.ReactNode;
  color: string;
  name: string;
}

interface ServiceCardProps {
  icon: IconProps;
  title: string;
  desc: string;
  toolIcons?: ToolIconProps[];
}

const MainIcon = ({ icon }: { icon: IconProps }) => {
  return (
    <div
      className={cn(
        "p-6 rounded-full inline-flex items-center justify-center text-4xl shadow-lg",
        icon.bg,
        icon.color
      )}
    >
      {icon.source}
    </div>
  );
};

const ToolIcon = ({ toolIcon }: { toolIcon: ToolIconProps }) => {
  return (
    <div
      className={cn(
        "rounded-full hover:scale-110 transition-transform duration-200 border-2 p-3 shadow-md flex items-center justify-center text-lg",
        toolIcon.color
      )}
    >
      {toolIcon.source}
    </div>
  );
};

export default function Item({ icon, title, desc, toolIcons }: ServiceCardProps) {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-col items-center text-center">
        <MainIcon icon={icon} />
        <CardTitle className="text-2xl mt-4 font-semibold text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        {toolIcons && (
          <div className="flex justify-center gap-4 mb-4">
            <TooltipProvider>
              {toolIcons.map((item, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <ToolIcon toolIcon={item} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm">{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        )}
        <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
      </CardContent>
    </Card>
  );
}
