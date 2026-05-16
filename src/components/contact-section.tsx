"use client";

import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { Svgexport35, Svgexport36, Svgexport37 } from "./icons";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Svgexport35,
      info: "4500 Forbes Blvd. Laham MD 30706",
   
    },
    {
      icon:Svgexport36,
      info: "Hello@buildersdesk.com",
     
    }, 
    {
      icon: Svgexport37,
      info: "240.000.0000",
    },
  ];



  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="w-10/12 mx-auto  w-full">
        <div className="grid grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col col-span-4 justify-start">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-primary mb-12">
              CONTACT US
            </h2>

            <div className="space-y-8 ml-20">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex items-start text-3xl gap-4">
                    <div className="flex-shrink-0  ">
                      <IconComponent
                        className="size-10 text-orange-500"
                        strokeWidth={2}
                      />
                    </div>
                    <div className="w-60">
                      <p className="text-2xl ">
                        {item.info}
                      </p>
                 
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Images */}
          <div className="  col-span-8">
          
              <Image
                src="/contact2.avif"
                alt="BuildersDesk Office"
                width={1200}
                height={400}
                className="w-full h-auto object-cover"
              />
          
          </div>
        </div>
      </div>
    </section>
  );
}
