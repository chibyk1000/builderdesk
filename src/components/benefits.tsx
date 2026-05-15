"use client";

import { ArrowRight,  } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    "Save up to 60% vs hiring in-house staff",
    "Fast turnaround (24-48 hours)",
    "Flexible monthly plans (no long-term contracts)",
    "Trained in various U.S. construction workflows",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-orange-500">
      {/* Background image placeholder */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20">
        <div className="w-full h-full bg-gradient-to-l from-black to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 pt-1">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <p className="text-xl md:text-2xl font-semibold text-white">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Right CTA */}
          <div className="flex items-center justify-center lg:justify-end">
            <button className="px-8 py-3 border-2 border-white text-white font-bold text-sm hover:bg-white hover:text-orange-500 transition-colors">
              SCHEDULE A FREE STRATEGY CALL
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
