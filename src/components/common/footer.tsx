"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#29618D] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo + Description */}
          <div>
            <div className="relative w-[142.56px] h-20">
              <Image src="/logo-light.svg" alt="" fill />
            </div>
            <p className="text-gray-300 text-sm">{t("description")}</p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="relative">
              <h4 className="font-bold mb-4 relative">
                {t("quickLinks.title")}
              </h4>
              <span className="bg-accent absolute top-5 inline-block w-8 h-0.5"></span>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition">
                  {t("quickLinks.links.home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  {t("quickLinks.links.about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  {t("quickLinks.links.services")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  {t("quickLinks.links.pricing")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <div className="relative">
              <h4 className="font-bold mb-4 relative">{t("services.title")}</h4>
              <span className="bg-accent absolute top-5 inline-block w-8 h-0.5"></span>
            </div>

            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white transition">
                  {t("services.items.projectManagement")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  {t("services.items.adminAssistance")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  {t("services.items.estimating")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  {t("services.items.bookkeeping")}
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition">
                  {t("services.items.businessDevelopment")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="relative">
              <h4 className="font-bold mb-4 relative">{t("contact.title")}</h4>
              <span className="bg-accent absolute top-5 inline-block w-8 h-0.5"></span>
            </div>

            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <Mail className="text-accent" />
                <span className="hover:text-white transition">
                  {t("contact.email")}
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-accent" />
                <span className="hover:text-white transition">
                  {t("contact.phone")}
                </span>
              </li>
              <li className="flex items-center gap-4">
                <MapPin className="text-accent" />
                <span className="hover:text-white transition">
                  {t("contact.location")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary pt-8 text-center text-[#D1D5DC]">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
