"use client";

import {
  Briefcase,
  Rocket,
  Building2,
  Users,
  Laptop,
  GraduationCap,
  Globe,
  HeartHandshake,
  ShoppingBag,
  Lightbulb,
  Factory,
} from "lucide-react";
import { Marquee } from "../ui/marquee";

export function AudienceMarquee() {
  const items = [
    { icon: Briefcase, label: "Executives" },
    { icon: Rocket, label: "Startups" },
    { icon: Building2, label: "Agencies" },
    { icon: Users, label: "Remote Teams" },
    { icon: Laptop, label: "Freelancers" },
    { icon: GraduationCap, label: "Educators" },
    { icon: Globe, label: "Global Teams" },
    { icon: HeartHandshake, label: "Nonprofits" },
    { icon: ShoppingBag, label: "E-commerce" },
    { icon: Lightbulb, label: "Innovators" },
    { icon: Factory, label: "Enterprises" },
  ];

  return (
    <div className="w-full mt-14">
      <Marquee pauseOnHover className="opacity-90">
        <div className="flex items-center gap-14 px-6">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="
                flex items-center gap-2 font-medium 
                text-gray-400 dark:text-gray-300 transition-colors
                hover:text-[#145e9b] dark:hover:text-[#135c98]
              "
            >
              <Icon
                className="
                  w-5 h-5 text-blue-500 dark:text-blue-400 
                  transition-transform duration-300 group-hover:scale-110
                "
              />
              {label}
            </div>
          ))}
        </div>
      </Marquee>

      {/* Soft underline gradient accent */}
      {/* <div className="w-full h-[2px] mt-4 bg-gradient-to-r from-[#135c98]/10 via-[#145e9b]/40 to-[#135c98]/10" /> */}
    </div>
  );
}
