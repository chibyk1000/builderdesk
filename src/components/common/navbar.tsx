"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FeatureBanner } from "../feature-banner";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Navbar");

  return (
    <header className="bg-white ">
      <nav className="w-11/12 mx-auto  px-4 sm:px-6 lg:px-8 py-5  flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center  flex-shrink-0">
          <div className=" rounded relative  flex items-center justify-center">
            <Image
              src={"/logo-new.avif"}
              width={111}
              height={100}
              alt="BuildersDesklogo"
            />
          </div>
          <div className="flex flex-col relative -left-2 font-dm-sans">
            <span className="text-xl  font-dm-sans  leading-tight">
              THE <br /> BUILDERS
            </span>

            <span className="text-3xl font-black font-dm-sans leading-tight">
              DESK
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="  text-gray-900 hover:underline transition-colors"
          >
            {t("home")}
          </Link>
          <Link
            href="/about"
            className="  text-gray-900 hover:underline transition-colors"
          >
            {t("about")}
          </Link>
          <Link
            href="/services"
            className="  text-gray-900 hover:underline transition-colors"
          >
            {t("services")}
          </Link>
          <Link
            href="/pricing"
            className="  text-gray-900 hover:underline transition-colors"
          >
            {t("pricing")}
          </Link>
          <Link
            href="/contact"
            className="  text-gray-900 hover:underline transition-colors"
          >
            {t("contact")}
          </Link>

          {/* CTA Button & Language Switcher */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button className="bg-accent font-normal rounded-none hover:bg-orange-600 text-white  px-6 py-5 ">
              {t("cta")}
            </Button>
          </div>
        </div>
      </nav>
      <FeatureBanner />
    </header>
  );
}
