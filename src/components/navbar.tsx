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
      <nav className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 bg-white shadow-md text-gray-800 text-sm">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl flex items-center">
          <img src="/logo.png" alt="Logo" className="w-20" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(({ name, href }) => (
            <NavLink
              key={name}
              to={href}
              className={({ isActive }) =>
                `
                relative px-2 py-1 font-medium text-gray-800 transition-all 
                after:content-[''] after:absolute after:left-0 after:bottom-0 
                after:w-full after:h-[2px] after:bg-[#039A9A] 
                after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                hover:after:scale-x-100
                ${isActive ? "after:scale-x-100 text-[#039A9A]" : ""}
              `
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <Button className="hidden md:block bg-[#039A9A] hover:bg-[#028080] active:scale-95 transition-all text-white">
          Start free trial
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden active:scale-90 transition text-gray-800"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[100] bg-white text-gray-900 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navItems.map(({ name, href, icon: Icon }) => (
          <NavLink
            key={name}
            to={href}
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 transition relative 
              ${isActive ? "text-[#039A9A]" : "hover:text-[#039A9A]"}`
            }
          >
            <Icon className="w-5 h-5" />
            {name}
          </NavLink>
        ))}

        {/* Close Button */}
        <Button
          onClick={() => setMobileMenuOpen(false)}
          className="active:ring-3 active:ring-gray-300 size-10 p-1 flex items-center justify-center bg-[#039A9A] hover:bg-[#028080] transition text-white rounded-md"
        >
          <X className="w-6 h-6" />
        </Button>
      </div>
    </>
  );
}

export default Navbar;
