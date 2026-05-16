"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#d6730a] text-white py-16 px-6">
      <div className="max-w-11/12 mx-auto">
        {/* Top Section */}
        <div className="flex  justify-between">
          {/* Logo and CTA */}
          <div className="flex flex-col items-start gap-6">
            <Link href="/" className="flex items-center  flex-shrink-0">
              <div className=" rounded relative  flex items-center justify-center">
                <Image
                  src={"/logo-new.avif"}
                  width={111}
                  height={100}
                  alt="BuildersDesklogo"
                />
              </div>
              <div className="flex text-black flex-col relative -left-2 font-dm-sans">
                <span className="text-xl  font-dm-sans  leading-tight">
                  THE <br /> BUILDERS
                </span>

                <span className="text-3xl font-black font-dm-sans leading-tight">
                  DESK
                </span>
              </div>
            </Link>

            <button className="bg-white text-orange-600 px-6 py-3  font-semibold hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
<div className="flex  w-7/12 justify-between">

            
          {/* Head Office */}
          <div>
            <h3 className="font-bold text-lg mb-4">Head Office</h3>
            <p className="text-sm leading-relaxed">
              4500 Forbes Blvd.
              <br />
              Lahamn MD 20706
            </p>
          </div>

          {/* Inquiries */}
          <div>
            <h3 className="font-bold text-lg mb-4">Inquiries</h3>
            <p className="text-sm leading-relaxed mb-4">
              For any inquiries, questions or commendations:
            </p>
            <p className="text-sm">
              123-456-7890
              <br />
              <a
                href="mailto:hello@buildersdesk.com"
                className="underline hover:no-underline transition"
              >
                hello@buildersdesk.com
              </a>
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-bold text-lg mb-4">Menu</h3>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="#" className="hover:underline transition">
                Home
              </Link>
              <Link href="#" className="hover:underline transition">
                Services
              </Link>
              <Link href="#" className="hover:underline transition">
                Projects
              </Link>
              <Link href="#" className="hover:underline transition">
                About Us
              </Link>
              <Link href="#" className="hover:underline transition">
                Careers
              </Link>
              <Link href="#" className="hover:underline transition">
                Contact
              </Link>
            </nav>
          </div>
</div>
        </div>

        {/* Divider */}
        <div className="border-t border-orange-500 my-8"></div>

        {/* Socials */}
        <div>
          <h3 className="font-bold text-lg mb-4">Socials</h3>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="hover:underline transition">
              Facebook
            </Link>
            <Link href="#" className="hover:underline transition">
              Instagram
            </Link>
            <Link href="#" className="hover:underline transition">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
