import { Locate, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#29618D] text-white py-12  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="relative w-[142.56px] h-20">
              <Image src={"/logo-light.svg"} alt="" fill />
            </div>
            <p className="text-gray-300 text-sm">
              Back-office support services for construction companies. Build
              Better Business.
            </p>
          </div>

          <div>
            <div className="relative">
              <h4 className="font-bold mb-4 relative">Quick Links</h4>
              <span className="bg-accent absolute top-5 inline-block w-8 h-0.5"></span>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="relative">
              <h4 className="font-bold mb-4 relative">Our Services</h4>
              <span className="bg-accent absolute top-5 inline-block w-8 h-0.5"></span>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition">
                  Project Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Admin Assistance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Estimating
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Bookkeeping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Business Development
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="relative">
              <h4 className="font-bold mb-4 relative">Contact Us</h4>
              <span className="bg-accent absolute top-5 inline-block w-8 h-0.5"></span>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <Mail className="text-accent" />
                <span className="hover:text-white transition">
                  info@thebuildersdesk.com
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-accent" />
                <span className="hover:text-white transition">
                  (800) 123-4567
                </span>
              </li>
              <li className="flex items-center gap-4">
                <MapPin className="text-accent" />
                <span className="hover:text-white transition">
                  Nationwide Service
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary pt-8 text-center  text-[#D1D5DC]">
          <p>&copy; 2025 The Builders Desk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
