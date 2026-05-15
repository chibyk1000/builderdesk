"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-orange-600 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and CTA */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded"></div>
              <div>
                <div className="text-xs font-bold">THE</div>
                <div className="text-xs font-bold">BUILDERS</div>
                <div className="text-sm font-bold">DESK</div>
              </div>
            </div>
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>

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
