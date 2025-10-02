"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur-md bg-black/40 text-white text-sm">
        <Link to="/" className="font-bold text-xl  bg-white rounded p-2">
        <img src="/logo.png" alt=""  className="w-20"/>
        </Link>

        <div className="hidden md:flex items-center gap-8 transition duration-500">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="hover:text-[#039A9A] transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Button className="hidden md:block bg-[#039A9A] hover:bg-[#028080] active:scale-95 transition-all r">
          Start free trial
        </Button>

        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden active:scale-90 transition"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[100] bg-black/90 text-white backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#039A9A] transition"
          >
            {item.name}
          </Link>
        ))}
        <Button
          onClick={() => setMobileMenuOpen(false)}
          className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-[#039A9A] hover:bg-[#028080] transition text-white rounded-md flex"
        >
          <X className="w-6 h-6" />
        </Button>
      </div>
    </>
  );
}
export default Navbar