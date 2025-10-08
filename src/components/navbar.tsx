"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  Briefcase,
  DollarSign,
  Info,
  Phone,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Briefcase },
  { name: "Pricing", href: "/pricing", icon: DollarSign },
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Phone },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* TOP NAVBAR */}
      <nav
        className="
          fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 
          bg-white dark:bg-[#0d1f33]/90 backdrop-blur-md shadow-md text-gray-800 dark:text-gray-100 
          text-sm transition-colors
        "
      >
        {/* Logo */}
        <Link to="/" className="font-bold text-xl flex items-center gap-2">
          <img src="/a2.png" alt="Logo" className="w-20" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(({ name, href }) => (
            <NavLink
              key={name}
              to={href}
              className={({ isActive }) =>
                `
                relative px-2 py-1 font-medium transition-all
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-full after:h-[2px] after:bg-[#145e9b] 
                after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                hover:after:scale-x-100 hover:text-[#145e9b]
                ${
                  isActive
                    ? "after:scale-x-100 text-[#135c98] font-semibold"
                    : "text-gray-700 dark:text-gray-200"
                }
              `
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          className="
            hidden md:block bg-[#145e9b] hover:bg-[#135c98] 
            active:scale-95 transition-all text-white font-medium
          "
        >
          Start free trial
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden active:scale-90 transition text-gray-800 dark:text-gray-100"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-[100] bg-white dark:bg-[#0d1f33] text-gray-900 dark:text-gray-100 
          backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden 
          transition-transform duration-300
          ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {navItems.map(({ name, href, icon: Icon }) => (
          <NavLink
            key={name}
            to={href}
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 font-medium transition relative 
              ${
                isActive
                  ? "text-[#135c98]"
                  : "hover:text-[#145e9b] text-gray-700 dark:text-gray-200"
              }`
            }
          >
            <Icon className="w-5 h-5" />
            {name}
          </NavLink>
        ))}

        {/* Close Button */}
        <Button
          onClick={() => setMobileMenuOpen(false)}
          className="
            active:ring-3 active:ring-gray-300 size-10 p-1 flex items-center justify-center 
            bg-[#145e9b] hover:bg-[#135c98] transition text-white rounded-md
          "
        >
          <X className="w-6 h-6" />
        </Button>
      </div>
    </>
  );
}

export default Navbar;
