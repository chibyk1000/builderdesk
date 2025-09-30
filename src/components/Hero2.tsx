"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight,  } from "lucide-react";

export function Hero2() {
  return (
    <section className="min-h-[80vh] hero-gradient flex items-center justify-center px-2 pt-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Phone mockup */}
              <div>
                  <img src="/v-assist2.png" alt="" className="size-92 object-contain" />
     </div>

        {/* Right side - Content */}
        <div className="animate-fade-in-right opacity-0 animation-delay-200 order-1 lg:order-2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#039A9A]/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs text-[#039A9A] mb-6">
         
          BuildersDesk
          </div>

          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-900 leading-snug">
            Always have a virtual assistant{" "}
            <span className="text-[#039A9A]">even when you are offline</span>
          </h1>

          <p className="text-base text-gray-700 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Builders Desk is the world's best personal assistant for handling
            urgent tasks or when you need extra help.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button
            //   size="sm"
              className="rounded-full text-sm px-6 bg-[#039A9A] text-white hover:bg-[#028080]"
            >
              Watch Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            
          </div>
        </div>
      </div>

      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-[#039A9A]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#039A9A]/10 rounded-full blur-3xl"></div>
    </section>
  );
}
