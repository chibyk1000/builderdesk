"use client"

import { Button } from "@/components/ui/button"
import { Menu, ShoppingCart } from "lucide-react"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 lg:px-12">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 bg-foreground rounded-sm"></div>
          <div className="h-3 w-3 bg-foreground rounded-sm"></div>
        </div>
        <span className="font-mono text-sm font-medium tracking-wide">STELLAR SOLUTIONS</span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
          Services
        </a>
        <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
          About
        </a>
        <a href="#" className="text-sm font-medium hover:text-accent transition-colors">
          Contact
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          <span className="text-sm">0</span>
        </div>
        <Button variant="outline" size="sm" className="hidden md:inline-flex bg-transparent">
          Book consultation
        </Button>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
