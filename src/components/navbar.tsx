"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeNavbar = () => setIsMenuOpen(false);
  const openNavbar = () => setIsMenuOpen(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[95%] max-w-5xl px-4 py-2.5 rounded-full border transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-lg border-slate-700 shadow-lg"
          : "bg-transparent border-slate-700"
      }`}
    >
      {/* Logo */}
      <a href="/" className="flex items-center">
        <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">A</span>
        </div>
        <span className="ml-2 font-semibold text-lg text-white">
          Assistant
        </span>
      </a>

      {/* Menu */}
      <div
        id="menu"
        className={`max-md:absolute max-md:bg-black/50 max-md:backdrop-blur max-md:top-0 transition-all duration-300 max-md:h-full max-md:w-full max-md:z-10 flex-col md:flex-row flex items-center gap-2 ${
          isMenuOpen
            ? "max-md:left-0 max-md:justify-center"
            : "max-md:-left-full"
        }`}
      >
        <a
          onClick={closeNavbar}
          className="px-4 py-2 border border-white/10 bg-white/10 font-medium rounded-full text-white"
          href="#"
        >
          Home
        </a>
        <a onClick={closeNavbar} className="px-4 py-2 text-white" href="#">
          Services
        </a>
        <a onClick={closeNavbar} className="px-4 py-2 text-white" href="#">
          How it Works
        </a>
        <a onClick={closeNavbar} className="px-4 py-2 text-white" href="#">
          Pricing
        </a>
        <a onClick={closeNavbar} className="px-4 py-2 text-white" href="#">
          Support
        </a>
        <button
          onClick={closeNavbar}
          className="md:hidden bg-gray-800 hover:bg-black text-white p-2 rounded-md aspect-square font-medium transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={openNavbar} className="md:hidden text-white">
        <svg
          className="size-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* CTA */}
      <Button className="hidden md:block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition">
        Get Assistant
      </Button>
    </motion.nav>
  );
};

export default Navbar;
