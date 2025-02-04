
"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import {
    Code,
    Facebook,
    Github,
    ImageIcon,
    Instagram,
    LayoutDashboard,
    MessageSquare,
    Music,
    Settings,
    Twitter,
    VideoIcon,
  } from "lucide-react";

  const TOOLS = [
    {
      label: "Conversation",
      icon: MessageSquare,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      href: "/conversation",
    },
    {
      label: "Music Generation",
      icon: Music,
      color: "text-emerald-500",
      bgColor: "bg-violet-500/10",
      href: "/music",
    },
    {
      label: "Image Generation",
      icon: ImageIcon,
      color: "text-pink-700",
      bgColor: "bg-pink-700/10",
      href: "/image",
    },
    {
      label: "Video Generation",
      icon: VideoIcon,
      color: "text-orange-700",
      bgColor: "bg-orange-700/10",
      href: "/video",
    },
    {
      label: "Code Generation",
      icon: Code,
      color: "text-green-700",
      bgColor: "bg-green-700/10",
      href: "/code",
    },
  ] as const;
  
  export const ROUTES = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      color: "text-sky-500",
    },
    ...TOOLS,
    {
      label: "Settings",
      icon: Settings,
      href: "/settings",
      color: null,
    },
  ] as const;
const Layout=()=>{
    const router = useRouter();
    return(
        <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI.
        </p>
      </div>

      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {TOOLS.map((tool) => (
          <Card
            key={tool.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
            onClick={() => router.push(tool.href)}
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>

              <div className="font-semibold">{tool.label}</div>
            </div>

            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
            
    )
}
export default Layout;