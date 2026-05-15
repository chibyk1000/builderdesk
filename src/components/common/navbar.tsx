"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FeatureBanner } from "../feature-banner";

export default function Navbar() {
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
            <span className="text-xl  font-dm-sans  leading-tight">THE <br /> BUILDERS</span>
          
            <span className="text-3xl font-black font-dm-sans leading-tight">DESK</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="  text-gray-900 hover:underline transition-colors"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="  text-gray-900 hover:underline transition-colors"
          >
            ABOUT US
          </Link>
          <Link
            href="/services"
            className="  text-gray-900 hover:underline transition-colors"
          >
            SERVICES
          </Link>
          <Link
            href="/pricing"
            className="  text-gray-900 hover:underline transition-colors"
          >
            PRICING
          </Link>
          <Link
            href="/contact"
            className="  text-gray-900 hover:underline transition-colors"
          >
            CONTACT
          </Link>

        {/* CTA Button */}
        <Button className="bg-accent font-normal rounded-none hover:bg-orange-600 text-white  px-6 py-5 ">
          SCHEDULE A CALL
        </Button>
        </div>
      </nav>
      <FeatureBanner/>
    </header>
  );
}
