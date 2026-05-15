"use client";

import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "4500 Forbes Blvd.",
      subtitle: "Lahamn MD 20706",
    },
    {
      icon: Mail,
      title: "Hello@buildersdesk.com",
      subtitle: "",
    },
    {
      icon: Phone,
      title: "240.000.0000",
      subtitle: "",
    },
  ];



  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col justify-start">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600 mb-12">
              CONTACT US
            </h2>

            <div className="space-y-8">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <IconComponent
                        className="w-6 h-6 text-orange-500"
                        strokeWidth={2}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900 font-semibold text-base">
                        {item.title}
                      </p>
                      {item.subtitle && (
                        <p className="text-gray-700 text-base mt-1">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="flex justify-end">
            <div className="relative w-full max-w-2xl">
              <Image
                src="/contact2.avif"
                alt="BuildersDesk Office"
                width={1200}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
