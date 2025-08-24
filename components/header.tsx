"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link" // Import Link for client-side navigation

export function Header() {
  const navItems: { name: string; href: string }[] = []

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1) // Remove '#' from href
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="w-full py-3 sm:py-5 md:py-4 px-4 sm:px-8 md:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 sm:gap-8 md:gap-6">
          <div className="flex items-center gap-2 sm:gap-4 md:gap-3">
            <span className="text-foreground text-lg sm:text-2xl md:text-xl font-semibold">SursaKit</span>
          </div>
          {/* Navigation items - hidden on mobile, visible on md+ */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-[#888888] hover:text-foreground px-4 py-2 rounded-full font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-5 md:gap-4">
          <a href="#waitlist-section" >
            <Button className="bg-secondary text-gray-900 hover:bg-secondary/90 px-4 sm:px-8 md:px-6 py-1.5 sm:py-2.5 md:py-2 rounded-full font-medium text-sm sm:text-lg md:text-base shadow-sm cursor-pointer">
              Join the revolution
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
