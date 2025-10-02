"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { PhoneChat } from "./PhoneChat";

export function Hero2() {
  return (
    <section className="min-h-[90vh] bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 flex items-center justify-center px-4 pt-16 relative overflow-hidden text-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Phone mockup */}
         <PhoneChat/>
    

        {/* Right side - Content */}
        <div className="animate-fade-in-right opacity-0 animation-delay-200 order-1 lg:order-2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs text-teal-400 mb-6">
            BuildersDesk
          </div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
            Always have a virtual assistant{" "}
            <span className="text-teal-400">even when you are offline</span>
          </h1>

          <p className="text-base text-slate-300 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Builders Desk is the world's best personal assistant for handling
            urgent tasks or when you need extra help.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button className="rounded-full text-sm px-6 bg-teal-500 text-white hover:bg-teal-600">
              Watch Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-slate-700/30 rounded-full blur-3xl"></div>
    </section>
  );
}
