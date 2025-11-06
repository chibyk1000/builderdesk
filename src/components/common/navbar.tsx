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
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();

  const links = [
    { text: "Home", href: "/", key:"home" },
    { text: "About Us", href: "/about", key:"about" },
    { text: "Services", href: "/services" , key:"services"},
    { text: "Pricing", href: "/pricing", key:"pricing" },
    { text: "Contact", href: "/contact", key:"contact" },
  ];

  const t = useTranslations
    ("Navbar");
  console.log(t("home"));
  
  // Handle locale change
  const handleLanguageChange = (value: string) => {
    const newPath = `/${value}${pathname.replace(/^\/(en|es)/, "")}`;
    router.push(newPath);
  };

  return (
    <nav className="h-20 flex items-center relative px-6 container max-w-[1216px] mx-auto justify-between">
      {/* Logo */}
      <Link href={`/${locale}`} className="relative inline-block">
        <Image
          src="/logo.png"
          alt="Builders Desk Logo"
          width={145}
          height={82}
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="flex items-center md:max-w-[60%] w-full justify-between max-lg:hidden">
        {links.map((link) => (
          <li key={link.text}>
            <Link
              href={`/${locale}${link.href}`}
              className={`text-sm transition-colors hover:text-primary ${
                pathname === `/${locale}${link.href}` && "text-primary"
              }`}
            >
              {t(link.key)}
            </Link>
          </li>
        ))}

        <Select value={locale} onValueChange={handleLanguageChange}>
          <SelectTrigger className="w-[130px] h-9 focus-visible:ring-0">
            <Globe color="#0E4571" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Español</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="success">
          <MessageCircle /> {t("whatsapp")}
        </Button>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <Button
        size="icon"
        variant="ghost"
        className="lg:hidden relative w-10 h-10 flex items-center justify-center"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="relative w-6 h-6">
          <Menu
            className={`absolute inset-0 size-7 transition-all duration-300 transform ${
              open
                ? "opacity-0 rotate-90 scale-75"
                : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <X
            className={`absolute inset-0 size-7 transition-all duration-300 transform ${
              open
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-90 scale-75"
            }`}
          />
        </div>
      </Button>

      {/* Mobile Menu */}
      <div
        className={`
          absolute top-20 left-0 w-full bg-white border-t z-80 lg:hidden 
          flex flex-col px-4 py-4 gap-4 
          transition-all duration-300 ease-in-out overflow-hidden
          ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {links.map((link) => (
          <Link
            key={link.text}
            href={`/${locale}${link.href}`}
            className="text-secondary block py-2"
            onClick={() => setOpen(false)}
          >
            {t(link.key)}
          </Link>
        ))}

        <Select value={locale} onValueChange={handleLanguageChange}>
          <SelectTrigger className="w-full h-9 focus-visible:ring-0">
            <Globe color="#0E4571" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Español</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="success" className="w-full">
          <MessageCircle /> {t("whatsapp")}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
