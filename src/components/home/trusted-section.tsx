"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Star,
  Building2,
  Rocket,
  Users,
  Briefcase,
  Globe,
} from "lucide-react";

export function TrustedSection() {
  return (
    <section>
      <div className="relative mx-auto overflow-hidden bg-slate-900 py-32 md:py-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6">
          {/* Background blobs */}
          <div className="absolute pointer-events-none top-10 -z-10 left-20 size-72 bg-gradient-to-b from-cyan-500/20 to-teal-500/10 blur-[180px]" />
          <div className="absolute pointer-events-none bottom-10 -z-10 right-20 size-72 bg-gradient-to-br from-cyan-500/20 to-teal-500/10 blur-[180px]" />

          {/* Left side */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="group flex items-center gap-2 rounded-full text-sm p-1 pr-3 text-cyan-400 bg-cyan-400/10">
              <span className="bg-cyan-400 text-slate-900 text-xs px-3.5 py-1 rounded-full font-medium">
                NEW
              </span>
              <p className="flex items-center gap-1">
                <span>Try 30 days free trial option</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition duration-300" />
              </p>
            </div>

            <h1 className="text-4xl font-semibold max-w-xl mt-6 text-white leading-tight">
              Trusted by the world’s leading teams.
            </h1>

            <p className="text-base text-slate-400 max-w-lg mt-4">
              Powering productivity for startups, agencies, and enterprises.
              Seamlessly integrates with your tools and workflows, so you can
              move faster and focus on what matters most.
            </p>

            {/* Social proof */}
            <div className="flex items-center gap-2 mt-6 text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400" />
                ))}
              <span className="text-sm text-slate-400 ml-2">
                4.9/5 average rating • 10k+ happy users
              </span>
            </div>

            {/* CTA */}
            <Button
              variant="outline"
              className="flex items-center gap-2 text-sm px-6 py-2.5 border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 active:scale-95 transition rounded-full mt-8"
            >
              See why they trust us
              <ChevronRight className="w-4 h-4" />
            </Button>

            {/* Icon showcase instead of company logos */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-10 mt-12 opacity-80">
              <div className="flex flex-col items-center gap-2 text-slate-300">
                <Building2 className="w-8 h-8 text-cyan-400" />
                <span className="text-xs">Enterprises</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-slate-300">
                <Rocket className="w-8 h-8 text-cyan-400" />
                <span className="text-xs">Startups</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-slate-300">
                <Users className="w-8 h-8 text-cyan-400" />
                <span className="text-xs">Agencies</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-slate-300">
                <Briefcase className="w-8 h-8 text-cyan-400" />
                <span className="text-xs">Freelancers</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-slate-300">
                <Globe className="w-8 h-8 text-cyan-400" />
                <span className="text-xs">Remote Teams</span>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="md:mr-16">
            <div className="max-w-xs md:max-w-sm aspect-square rounded-2xl overflow-hidden shadow-xl border border-slate-700">
              <img
                src="/trusted.png"
                alt="Happy client testimonial"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
