"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Globe, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  const [lang, setLang] = useState("english");
  const [open, setOpen] = useState(false);

  const links = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Pricing", href: "/pricing" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <nav className="h-20 flex items-center relative px-6 lg:px-20 xl:px-40 border justify-between">
      {/* Logo */}
      <Link href={"/"} className="relative inline-block">
        <Image
          src={"/logo.png"}
          alt="Builders Desk Logo"
          width={145}
          height={82}
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="flex items-center md:max-w-[70%] lg:max-w-[64%] w-full justify-between max-lg:hidden">
        {links.map((link) => (
          <li key={link.text}>
            <Link href={link.href} className="text-sm">
              {link.text}
            </Link>
          </li>
        ))}

        <Select value={lang} onValueChange={setLang}>
          <SelectTrigger className="w-[130px] h-9 focus-visible:ring-0">
            <Globe color="#0E4571" />
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="french">French</SelectItem>
          </SelectContent>
        </Select>

        <Button variant={"success"}>
          <MessageCircle /> WhatsAppUs
        </Button>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <Button
        size={"icon"}
        variant={"ghost"}
        className="lg:hidden relative w-10 h-10 flex items-center justify-center"
        onClick={() => setOpen((prev) => !prev)}
      >
        {/* Animated icon container */}
        <div className="relative w-6 h-6">
          {/* Hamburger icon */}
                  <Menu
                  
            className={`absolute inset-0 size-7 transition-all duration-300 transform ${
              open
                ? "opacity-0 rotate-90 scale-75"
                : "opacity-100 rotate-0 scale-100"
            }`}
          />
          {/* Close icon */}
          <X

            className={`absolute inset-0 size-7 transition-all  duration-300 transform ${
              open
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-90 scale-75"
            }`}
          />
        </div>
      </Button>

      {/* Mobile Menu with slide + fade animation */}
      <div
        className={`
          absolute top-20 left-0 w-full bg-white border-t z-50 md:hidden 
          flex flex-col px-4 py-4 gap-4 
          transition-all duration-300 ease-in-out overflow-hidden
          ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {links.map((link) => (
          <Link
            key={link.text}
            href={link.href}
            className="text-secondary block py-2"
            onClick={() => setOpen(false)}
          >
            {link.text}
          </Link>
        ))}

        <Select value={lang} onValueChange={setLang}>
          <SelectTrigger className="w-full h-9 focus-visible:ring-0">
            <Globe color="#0E4571" />
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="french">French</SelectItem>
          </SelectContent>
        </Select>

        <Button variant={"success"} className="w-full">
          <MessageCircle /> WhatsAppUs
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
