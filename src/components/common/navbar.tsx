"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-10 h-10 bg-blue-700 rounded flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-bold text-blue-700 leading-tight">
              THE
            </span>
            <span className="text-xs font-bold text-blue-700 leading-tight">
              BUILDERS
            </span>
            <span className="text-sm font-black text-gray-900 leading-tight">
              DESK
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-gray-900 hover:text-blue-700 transition-colors"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-gray-900 hover:text-blue-700 transition-colors"
          >
            ABOUT US
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-gray-900 hover:text-blue-700 transition-colors"
          >
            SERVICES
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-gray-900 hover:text-blue-700 transition-colors"
          >
            PRICING
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-900 hover:text-blue-700 transition-colors"
          >
            CONTACT
          </Link>
        </div>

        {/* CTA Button */}
        <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-6 py-2 rounded">
          SCHEDULE A CALL
        </Button>
      </nav>
    </header>
  );
}
