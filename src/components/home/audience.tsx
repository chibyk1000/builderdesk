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
  return (
    <div className="w-full mt-14">
      <Marquee   pauseOnHover  className="opacity-80">
        <div className="flex items-center gap-14 px-6">
          <div className="flex items-center gap-2 text-gray-300 font-medium">
            <Briefcase className="w-5 h-5 text-[#039A9A]" /> Executives
          </div>
          <div className="flex items-center gap-2 text-gray-300 font-medium">
            <Rocket className="w-5 h-5 text-[#039A9A]" /> Startups
          </div>
          <div className="flex items-center gap-2 text-gray-300 font-medium">
            <Building2 className="w-5 h-5 text-[#039A9A]" /> Agencies
          </div>
          <div className="flex items-center gap-2 text-gray-300 font-medium">
            <Users className="w-5 h-5 text-[#039A9A]" /> Remote Teams
          </div>
          <div className="flex items-center gap-2 text-gray-300 font-medium">
            <Laptop className="w-5 h-5 text-[#039A9A]" /> Freelancers
          </div>
          <div className="flex items-center gap-2 text-gray-300 font-medium">
            <GraduationCap className="w-5 h-5 text-[#039A9A]" /> Educators
          </div>
          <div className="flex items-center gap-2 text-gray-300 font-medium">
            <Globe className="w-5 h-5 text-[#039A9A]" /> Global Teams
          </div>
          <div className="flex items-center gap-2 text-gray-300 font-medium">
            <HeartHandshake className="w-5 h-5 text-[#039A9A]" /> Nonprofits
          </div>
          <div className="flex items-center gap-2 text-gray-300 font-medium">
            <ShoppingBag className="w-5 h-5 text-[#039A9A]" /> E-commerce
          </div>
          <div className="flex items-center gap-2 text-gray-300 font-medium">
            <Lightbulb className="w-5 h-5 text-[#039A9A]" /> Innovators
          </div>
          <div className="flex items-center gap-2 text-gray-300 font-medium">
            <Factory className="w-5 h-5 text-[#039A9A]" /> Enterprises
          </div>
        </div>
      </Marquee>
    </div>
  );
}
