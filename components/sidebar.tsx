'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
    Code,
   
    ImageIcon,

    LayoutDashboard,
    MessageSquare,
    Music,
    Settings,
  
    VideoIcon,
  } from "lucide-react";
const montserrat=Montserrat({
    weight:"600",
    subsets: ["latin"]
});
const ROUTES=[
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
      },
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
      {
        label: "Settings",
        icon: Settings,
        href: "/settings",
        color: null,
      },
    ]
const Sidebar=()=>{
    const  pathname  = usePathname();
    return(
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
           <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image src="/logo.png" alt="Genius logo" fill />
          </div>

          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Clarity
          </h1>
        </Link>

        <div className="space-y-1">
          {ROUTES.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>

        </div>
    )
}
export default Sidebar